// @flow

import type { UserType } from '../models/UserModel';

export default class Favorite {
  id: string;
  username: string;
  password: string;
  email: string;

  constructor(user: UserType) {
    this.id = user._id.toString();
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
  }
}
