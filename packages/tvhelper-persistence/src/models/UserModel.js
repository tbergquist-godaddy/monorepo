// @flow

import { Schema } from 'mongoose';

import connection from '../connection';

export type UserType = {
  +_id: string,
  +username: string,
  +password: string,
  +email: string,
};

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User: $FlowFixMe = connection.model('users', UserSchema);

export default User;
