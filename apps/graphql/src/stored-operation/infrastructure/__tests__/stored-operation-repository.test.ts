import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection } from 'mongoose';

import { storedOperationConnection as connection } from '../../../connection';
import StoredOperationRepository from '../stored-operation-repository';

let mongoServer: MongoMemoryServer;
let con: Connection;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  con = await connection.openUri(mongoServer.getUri());
});

afterAll(async () => {
  if (con) {
    await con.close();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
});

afterEach(async () => {
  await con.dropCollection('persistedqueries');
});

const setup = async () => {
  const repository = new StoredOperationRepository();
  const seed = [
    {
      operationId: '123',
      text: 'lol',
    },
    {
      operationId: '321',
      text: 'roflmao',
    },
  ];
  await con.collection('persistedqueries').insertMany(seed);
  return {
    repository,
    seed,
  };
};

describe('getOperationText', () => {
  it('gets the operationText from the id', async () => {
    const { repository } = await setup();
    const text = 'lol';
    const operationId = '123';

    await expect(repository.getOperationText(operationId)).resolves.toBe(text);
  });

  it('returns undefined when not found', async () => {
    const { repository } = await setup();
    const operationId = 'no_existing';

    await expect(repository.getOperationText(operationId)).resolves.toBeUndefined();
  });
});

describe('addOperations', () => {
  it('adds operations', async () => {
    const { repository } = await setup();
    const operations = [
      {
        operationId: '21',
        text: 'oh noes',
      },
      { operationId: '999', text: 'omg' },
    ];
    await expect(repository.addOperations(operations)).resolves.toEqual(operations);
  });

  it("doesn't overwrite existing ids", async () => {
    const { repository } = await setup();
    const operations = [
      {
        operationId: '21',
        text: 'oh noes',
      },
      { operationId: '999', text: 'omg' },
    ];
    await expect(
      repository.addOperations([
        ...operations,
        {
          operationId: '123',
          text: 'override',
        },
      ]),
    ).resolves.toEqual(operations);
  });

  it('works with only existing operations', async () => {
    const { repository, seed } = await setup();
    await expect(repository.addOperations(seed)).resolves.toEqual([]);
  });
});
