// @flow

import mongoose, { type MongooseConnection } from 'mongoose';

const connection: MongooseConnection = mongoose.createConnection();

mongoose.set('debug', __DEV__);

export default connection;
