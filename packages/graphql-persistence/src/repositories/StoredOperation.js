// @flow

import StoredOperationModel, { type StoredOperationType } from '../models/StoredOperation';

export default class StoredOperationRepository {
  static async getOperationText(operationId: string): Promise<?string> {
    const operation = await StoredOperationModel.findOne({ operationId });
    return operation?.text;
  }

  static async addOperations(operations: $ReadOnlyArray<StoredOperationType>): Promise<any> {
    const operationIds = operations.map(i => i.operationId);
    const existingOperations = await StoredOperationModel.find({
      operationId: { $in: operationIds },
    });
    const existingOperationIds = existingOperations.map(i => i.operationId);
    const operationsToAdd = operations.filter(i => !existingOperationIds.includes(i.operationId));

    return StoredOperationModel.create(operationsToAdd);
  }
}
