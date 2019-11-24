// @flow strict

import type { UserType } from '../models/UserModel';

export default class User {
  id: string;
  username: string;
  email: string;

  constructor(user: UserType) {
    this.id = user._id.toString();
    this.username = user.username;
    this.email = user.email;
  }
}
