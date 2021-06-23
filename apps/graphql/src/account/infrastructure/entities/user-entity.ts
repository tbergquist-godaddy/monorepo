import { Schema } from 'mongoose';

import { tvHelperConnection } from '../../../connection';

export interface IUser {
  _id: string;
  username: string;
  password: string;
  email: string;
}

const UserSchema = new Schema<IUser>({
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

const UserModel = tvHelperConnection.model<IUser>('users', UserSchema);

export default UserModel;
