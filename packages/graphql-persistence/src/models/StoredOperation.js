// @flow

import { Schema } from 'mongoose';

import graphqlConnection from '../connection';

export type StoredOperationType = {|
  +_id?: string,
  +operationId: string,
  +text: string,
|};

const StoredOperationSchema = new Schema({
  operationId: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const StoredOperation = graphqlConnection.model('persistedquery', StoredOperationSchema);

StoredOperationSchema.indexes();

export default StoredOperation;
