// @flow

import connection from '../../connection';
import StoredOperationRepository from '../StoredOperation';

describe('StoredOperationRepository', () => {
  beforeEach(async () => {
    await StoredOperationRepository.addOperations([
      { operationId: '123', text: 'lol' },
      { operationId: '321', text: 'rofl' },
    ]);
  });
  afterEach(async () => {
    await connection.collection('persistedqueries').drop();
  });

  it('gets operation text', async () => {
    const operationText = await StoredOperationRepository.getOperationText('123');

    expect(operationText).toBe('lol');
  });

  it('returns undefined if no operation is found', async () => {
    const operationText = await StoredOperationRepository.getOperationText('fail');

    expect(operationText).toBeUndefined();
  });
});
