// @flow

import mongoose from 'mongoose';

const connection = mongoose.createConnection();

mongoose.set('debug', __DEV__);

export default connection;
