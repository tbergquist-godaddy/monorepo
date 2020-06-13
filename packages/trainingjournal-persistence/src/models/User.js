// @flow strict-local

import Sequelize, { Model } from 'sequelize';

import connection from '../connection';

export type UserType = $ReadOnly<{
  username: string,
  email: string,
  password: string,
  salt: string,
}>;

export default class User extends Model<UserType> {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'user',
  },
);
