// @flow strict

import { Schema, Model } from 'mongoose';
import { encryptPassword, generateSalt } from '@tbergq/persistence-utils';

import connection from '../connection';

const UserSchema = new Schema({
  _id: String,
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
    set: (email: string) => email.toLowerCase().trim(),
  },
  salt: {
    type: String,
    required: true,
  },
  emailConfirmed: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre('save', function(next) {
  this._id = this.email;
  next();
});

type CreateUserInput = {
  +username: string,
  +password: string,
  +email: string,
};

class UserDoc extends Model {
  username: string;
  password: string;
  email: string;
  emailConfirmed: boolean;
  salt: string;
  _id: string;

  static async createUser(input: CreateUserInput): Promise<UserDoc> {
    const salt = generateSalt();
    const password = encryptPassword(input.password, salt);
    const user = await this.create({
      ...input,
      password,
      salt,
    });
    return user.toObject({ virtuals: false });
  }
}

UserSchema.loadClass(UserDoc);

const User: Class<UserDoc> = connection.model('users', UserSchema);

export default User;
