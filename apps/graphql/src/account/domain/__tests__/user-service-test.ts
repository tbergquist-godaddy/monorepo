import UserService from '../user-service';
import { IUserRepository } from '../../infrastructure/user-repository';

const setup = () => {
  const getByUserName = jest.fn();

  const repository: IUserRepository = {
    getByUserName,
  };
  const service = new UserService(repository);

  return {
    service,
    getByUserName,
  };
};

it('gets a user by username', async () => {
  const { service, getByUserName } = setup();
  const user = {
    _id: '1',
    username: 'lol',
    email: 'lol@lol.com',
    password: '123',
  };
  getByUserName.mockResolvedValue(user);

  expect(await service.getByUserName('lol')).toEqual({
    id: user._id,
    username: user.username,
    email: user.email,
  });
});
