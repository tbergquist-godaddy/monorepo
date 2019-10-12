// @flow

import type { UserType } from '../models/UserModel';

export default class User {
  id: string;
  username: string;
  password: string | null;
  email: string;

  constructor(user: UserType, includePassword: boolean = false) {
    this.id = user._id.toString();
    this.username = user.username;
    this.password = includePassword ? user.password : null;

    this.email = user.email;
  }
}
