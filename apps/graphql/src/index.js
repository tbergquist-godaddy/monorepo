// @flow

import express, { type $Request, type $Response } from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import passport from 'passport';
import { tvHelperConnection } from '@tbergq/tvhelper-persistence';
import { graphqlConnection } from '@tbergq/graphql-persistence';
import { trainingJournalConnection } from '@tbergq/trainingjournal-persistence';
import { invariant } from '@adeira/js';
import { config } from 'dotenv';
import passportJwt from 'passport-jwt';

import Schema from './Schema';
import createGraphqlContext from './services/createGraphqlContext';
import { jwtFromRequest, tokenToUser, attachUserToRequest } from './services/auth';
import getPersistedQuery from './middleware/getPersistedQuery';

config();

const { PORT, DB_URL: TVHELPER_DB_URL, JWT_SECRET, GRAPHQL_DB_URL, TJA_DB_URL } = process.env;

passport.use(
  new passportJwt.Strategy(
    {
      secretOrKey: JWT_SECRET,
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

function createGraphqlServer(request: $Request) {
  return graphqlHTTP({
    schema: Schema,
    graphiql: true,
    context: createGraphqlContext(request),
  });
}

app.use('/', attachUserToRequest, getPersistedQuery(), (request: $Request, response: $Response) => {
  // $FlowFixMe
  return createGraphqlServer(request)(request, response);
});

invariant(TVHELPER_DB_URL != null, 'Expected to have db url for tvhelper, but did not');
invariant(GRAPHQL_DB_URL != null, 'Expected to have db url for graphql, but did not');
invariant(TJA_DB_URL != null, 'Expected to have db url for trainingjournal, but did not');

tvHelperConnection.openUri(TVHELPER_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

graphqlConnection.openUri(GRAPHQL_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

trainingJournalConnection.openUri(TJA_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

if (process.env.NODE_ENV === 'production') {
  app.listen();
} else {
  app.listen(PORT ?? 3001);
}

console.log(`app running on http://localhost:${PORT ?? '3001'}`); // eslint-disable-line no-console
