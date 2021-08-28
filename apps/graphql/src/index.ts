import express, { Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import passport from 'passport';
import { graphqlConnection } from '@tbergq/graphql-persistence';
import { invariant } from '@adeira/js';
import { config } from 'dotenv';
import passportJwt from 'passport-jwt';
// @ts-ignore: No types available
import depthLimit from 'graphql-depth-limit';

import Schema from './application/Schema';
import createGraphqlContext from './services/createGraphqlContext';
import { jwtFromRequest, tokenToUser, attachUserToRequest } from './services/auth';
import getPersistedQuery from './middleware/getPersistedQuery';
import { tvHelperConnection } from './connection';

config();

const { PORT, DB_URL: TVHELPER_DB_URL, JWT_SECRET, GRAPHQL_DB_URL } = process.env;

passport.use(
  new passportJwt.Strategy(
    {
      secretOrKey: JWT_SECRET,
      // @ts-ignore: This works
      jwtFromRequest,
    },
    tokenToUser,
  ),
);

const app = express();
app.use(cors({ methods: ['GET', 'POST'] }));
app.use(compression());
app.use(morgan('dev'));
passport.initialize();

function createGraphqlServer(request: Request) {
  return graphqlHTTP({
    schema: Schema,
    graphiql: true,
    context: createGraphqlContext(request),
    validationRules: [depthLimit(10)],
  });
}

app.use('/', attachUserToRequest, getPersistedQuery(), (request: Request, response: Response) => {
  return createGraphqlServer(request)(request, response);
});

invariant(GRAPHQL_DB_URL != null, 'Expected to have db url for graphql, but did not.');
invariant(TVHELPER_DB_URL != null, 'Expected to have db url for graphql, but did not.');

(async () => {
  await Promise.all([
    tvHelperConnection.openUri(TVHELPER_DB_URL, {}),
    graphqlConnection.openUri(GRAPHQL_DB_URL, {}),
  ]);

  if (process.env.NODE_ENV === 'production') {
    app.listen();
  } else {
    app.listen(PORT ?? 3001);
  }

  console.log(`app running on http://localhost:${PORT ?? '3001'}`); // eslint-disable-line no-console
})();
