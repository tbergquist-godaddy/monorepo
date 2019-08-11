// @flow

import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const DB_URL = process.env.DB_URL ?? 'mongodb://127.0.0.1:27017/tvhelper';

const connection = mongoose.createConnection(DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.set('debug', __DEV__);

export default connection;
