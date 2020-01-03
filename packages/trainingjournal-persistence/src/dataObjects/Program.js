// @flow strict

import type { ProgramType } from '../models/ProgramModel';

export default class Program {
  id: string;
  name: string;
  date: Date;
  userId: string;

  constructor(program: ProgramType) {
    this.id = program._id.toString();
    this.name = program.name;
    this.date = program.date;
    this.userId = program.user.toString();
  }
}
