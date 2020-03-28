// @flow strict

import { Schema } from 'mongoose';

import connection from '../connection';

export type ProgramType = {|
  +_id: string,
  +name: string,
  +date: Date,
  +user: string,
|};

const ProgramSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

const Program: Class<$FlowFixMe> = connection.model('programs', ProgramSchema);

export default Program;
