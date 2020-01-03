// @flow strict

import Model, { type ProgramType } from '../models/ProgramModel';
import Program from '../dataObjects/Program';

type CreateProgramType = $ReadOnly<{|
  ...$ReadOnly<$Diff<ProgramType, {| +_id: string, +date: Date |}>>,
  +date?: Date,
|}>;

export default class ProgramRepository {
  static async createProgram(program: CreateProgramType) {
    const newProgram = await Model.create(program);
    return new Program(newProgram);
  }
}
