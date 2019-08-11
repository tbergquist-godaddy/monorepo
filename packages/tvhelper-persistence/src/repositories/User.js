// @flow

import UserModel from '../models/UserModel';

const findUser = (username: string) => UserModel.findOne({ username });

export default {
  findUser,
};
