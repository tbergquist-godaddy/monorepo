// @flow

import { IncomingMessage, ServerResponse } from 'http';
import { ApolloServer } from 'apollo-server-micro';
import { config as loadEnv } from 'dotenv';
import { schema, createContext } from '@tbergq/trainingjournal-graphql';
import passport from 'passport';
import passportJwt from 'passport-jwt';
import { UserRepository } from '@tbergq/trainingjournal-persistence';

loadEnv();

const { JWT_SECRET } = process.env;

type JwtPayload = {|
  +iss: string,
  +username: string,
  +token?: string,
|};

const jwtFromRequest = (request: IncomingMessage): void | string => {
  return request.headers.authorization;
};

const tokenToUser = async (jwtPayload: JwtPayload, done: Function) => {
  const user = await UserRepository.getByUsername(jwtPayload.username);
  if (user != null) {
    done(null, {
      id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    done(null, null);
  }
};

const attachUserToRequest = (req: IncomingMessage, res: ServerResponse) => {
  return new Promise((resolve) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (user) {
        // $FlowExpectedError[prop-missing]: We are setting it and it is ok
        req.user = user;
      } else if (err) {
        // $FlowExpectedError[prop-missing]: We are setting it and it is ok
        req.user = null;
      }

      resolve();
    })(req, res);
  });
};

passport.use(
  new passportJwt.Strategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest,
    },
    tokenToUser,
  ),
);

const apolloServer = new ApolloServer({
  schema,
  introspection: __DEV__,
  playground: __DEV__,
  context: createContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function graphql(req: IncomingMessage, res: ServerResponse): Promise<empty> {
  await attachUserToRequest(req, res);

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
