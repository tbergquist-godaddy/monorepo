// @flow strict-local

import Sequelize, { Model } from 'sequelize';

import connection from '../connection';
import User from './User';

export type ExerciseType = $ReadOnly<{
  id?: number,
  userId: number,
  name: string,
  description?: string,
}>;

export default class Exercise extends Model<ExerciseType> {
  id: number;
  userId: number;
  name: string;
  description: string;
}

Exercise.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: connection,
    modelName: 'exercise',
  },
);
