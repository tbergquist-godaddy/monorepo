// @flow strict

import { Schema } from 'mongoose';

import connection from '../connection';

export type UserType = {|
  +_id: string,
  +username: string,
  +password: string,
  +email: string,
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
  salt: {
    type: String,
    required: true,
  },
});

// See: https://github.com/flow-typed/flow-typed/blob/master/definitions/npm/mongoose_v5.x.x/flow_v0.104.x-/test_mongoose-v5.js
const User: Class<$FlowFixMe> = connection.model('users', UserSchema);

export default User;
