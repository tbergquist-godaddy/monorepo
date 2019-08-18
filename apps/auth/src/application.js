// @flow

import { tvHelperConnection } from '@tbergq/tvhelper-persistence';
import { config } from 'dotenv';
import { invariant } from '@kiwicom/js';

import server from './server';

config();
const { TVHELPER_DB_URL } = process.env;

invariant(TVHELPER_DB_URL != null, 'Expected to have db url for tvheper, but did not');

tvHelperConnection.openUri(TVHELPER_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

server.start();
