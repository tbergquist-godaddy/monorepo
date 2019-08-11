// @flow

import { Schema } from 'mongoose';

import connection from '../connection';

export type UserType = {|
  +id: string,
  +username: string,
  +password: string,
|};

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

const User = connection.model('users', UserSchema);

export default User;
