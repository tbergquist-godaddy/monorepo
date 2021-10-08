import { ObjectId, Schema } from 'mongoose';

import { storedOperationConnection } from '../../../connection';

export interface IStoredOperation {
  _id?: ObjectId;
  operationId: string;
  text: string;
}

const StoredOperationSchema = new Schema<IStoredOperation>({
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

const StoredOperation = storedOperationConnection.model('persistedquery', StoredOperationSchema);

StoredOperationSchema.indexes();

export default StoredOperation;
