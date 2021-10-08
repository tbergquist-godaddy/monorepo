import { Model } from 'mongoose';
import { Maybe } from 'types';

import StoredOperationModel, { IStoredOperation } from './entities/stored-operation';

export interface IStoredOperationRepository {
  addOperations: (
    operations: ReadonlyArray<IStoredOperation>,
  ) => Promise<ReadonlyArray<IStoredOperation>>;
  getOperationText: (operationId: string) => Promise<Maybe<string>>;
}
export default class StoredOperationRepository implements IStoredOperationRepository {
  #model: Model<IStoredOperation>;

  constructor(model: Model<IStoredOperation> = StoredOperationModel) {
    this.#model = model;
  }

  async getOperationText(operationId: string): Promise<Maybe<string>> {
    const operation = await this.#model.findOne({ operationId }).select('text -_id');
    return operation?.text;
  }

  async addOperations(
    operations: ReadonlyArray<IStoredOperation>,
  ): Promise<ReadonlyArray<IStoredOperation>> {
    const operationIds = operations.map((i) => i.operationId);
    const existingOperations = await this.#model.find({
      operationId: { $in: operationIds },
    });
    const existingOperationIds = existingOperations.map((i) => i.operationId);
    const operationsToAdd = operations.filter((i) => !existingOperationIds.includes(i.operationId));

    const insertedDocuments = await this.#model.create(operationsToAdd);
    return insertedDocuments.map(({ operationId, text }) => ({
      operationId,
      text,
    }));
  }
}
