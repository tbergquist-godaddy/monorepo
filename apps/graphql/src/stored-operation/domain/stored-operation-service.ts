import { Maybe } from 'types';

import { IStoredOperationDTO } from './dto/stored-operation-dto';
import StoredOperationRepository, {
  IStoredOperationRepository,
} from '../infrastructure/stored-operation-repository';

export interface IStoredOperationService {
  addOperations: (
    operations: ReadonlyArray<IStoredOperationDTO>,
  ) => Promise<ReadonlyArray<IStoredOperationDTO>>;
  getOperationText: (operationId: string) => Promise<Maybe<string>>;
}

export default class StoredOperationService implements IStoredOperationService {
  #storedOperationRepository: IStoredOperationRepository;

  constructor(
    storedOperationRepository: IStoredOperationRepository = new StoredOperationRepository(),
  ) {
    this.#storedOperationRepository = storedOperationRepository;
  }

  getOperationText(operationId: string): Promise<Maybe<string>> {
    return this.#storedOperationRepository.getOperationText(operationId);
  }

  addOperations(
    operations: ReadonlyArray<IStoredOperationDTO>,
  ): Promise<ReadonlyArray<IStoredOperationDTO>> {
    return this.#storedOperationRepository.addOperations(operations);
  }
}
