// @flow strict

import Model, { type ProgramType } from '../models/ProgramModel';
import Program from '../dataObjects/Program';
import { toObjectId } from './utils';

type CreateProgramType = $ReadOnly<{|
  ...$ReadOnly<$Diff<ProgramType, {| +_id: string, +date: Date |}>>,
  +date?: Date,
|}>;

export default class ProgramRepository {
  static async createProgram(program: CreateProgramType) {
    const newProgram = await Model.create(program);
    return new Program(newProgram);
  }

  static async getPrograms({
    userId,
    skip,
    limit,
  }: {|
    +userId: string,
    +skip: number,
    +limit: number,
  |}) {
    const aggregate = await Model.aggregate([
      {
        $match: { user: toObjectId(userId) },
      },
      {
        $sort: { date: 1 },
      },
      {
        $facet: {
          programs: [{ $skip: skip }, { $limit: limit }],
          count: [{ $count: 'total' }],
        },
      },
      {
        $unwind: '$count',
      },
      {
        $project: {
          count: '$count.total',
          programs: '$programs',
        },
      },
    ]).exec();

    const { count, programs } = aggregate[0];

    return {
      count,
      programs: programs.map(program => new Program(program)),
    };
  }
}
