import UserRepository from '../user-repository';
import * as crosscutting from '../../../crosscutting';

const setup = () => {
  const findOne = jest.fn();
  const model: any = {
    findOne,
  };
  const repository = new UserRepository(model);
  return {
    repository,
    findOne,
  };
};

it('gets a user by username', async () => {
  const { repository, findOne } = setup();
  const user = {
    _id: '1',
    username: 'lol',
    password: '123',
    email: 'lol@lol.com',
  };
  findOne.mockResolvedValue({
    toJSON: () => user,
  });

  expect(await repository.getByUserName('lol')).toEqual(user);
});

it('returns null if findOne throws', async () => {
  const spy = jest.spyOn(crosscutting, 'log').mockImplementationOnce(() => {});
  const { repository, findOne } = setup();
  findOne.mockRejectedValue(new Error('Dang'));

  expect(await repository.getByUserName('lol')).toBeNull();
  expect(spy).toHaveBeenCalledWith('failed to fetch user: lol', new Error('Dang'));
  spy.mockRestore();
});

it('returns undefined if findOne returns null', async () => {
  const { repository, findOne } = setup();
  findOne.mockResolvedValue(null);
  expect(await repository.getByUserName('lol')).toBeUndefined();
});
