// @flow

import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const TVHELPER_DB_URL = process.env.TVHELPER_DB_URL ?? 'mongodb://127.0.0.1:27017/tvhelper';

const connection = mongoose.createConnection(TVHELPER_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.set('debug', __DEV__);

export default connection;
