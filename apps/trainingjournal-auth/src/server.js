// @flow strict

import { config } from 'dotenv';
import { invariant } from '@kiwicom/js';
import swaggerUI from 'swagger-ui-express';

import swaggerDocument from './swagger.json';
import app from './app';
import connection from './db/connection';

config();
const { PORT, DB_URL } = process.env;

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
invariant(DB_URL != null, 'Expected to have DB_URL environment varible, but it was undefined');

connection.openUri(DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = PORT ?? 4000;

if (__DEV__) {
  // eslint-disable-next-line no-console
  app.listen(4000, () => console.log(`Example app listening on port ${port}!`));
} else {
  app.listen();
}
