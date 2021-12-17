import { Test } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma-service';
import { ValidationsService } from 'src/validations/validations-service';

import { UserResolver } from '../user-resolver';
import { UserService } from '../user-service';

const setup = async () => {
  const moduleRef = await Test.createTestingModule({
    providers: [UserService, UserResolver, ValidationsService, PrismaService],
  }).compile();

  const userService = moduleRef.get<UserService>(UserService);
  const validationService = moduleRef.get<ValidationsService>(ValidationsService);
  const userResolver = moduleRef.get<UserResolver>(UserResolver);
  return { userResolver, userService, validationService, password: 'password' };
};

it('returns invalid email for invalid emails', async () => {
  const { userResolver, validationService, password } = await setup();
  jest.spyOn(validationService, 'isValidEmail').mockImplementation(() => false);
  const email = 'test';

  await expect(userResolver.createUser({ email, password })).resolves.toEqual({
    message: `${email} is not a valid email`,
    code: 'INVALID_EMAIL',
  });
});

it('returns correct error for duplicate email address', async () => {
  const { userResolver, validationService, userService, password } = await setup();
  jest.spyOn(validationService, 'isValidEmail').mockImplementation(() => true);
  jest.spyOn(userService, 'createUser').mockRejectedValue(new Error('User already exists'));
  const email = 'test@test.no';

  await expect(userResolver.createUser({ email, password })).resolves.toEqual({
    message: 'User already exists',
    code: 'USER_ALREADY_EXISTS',
  });
});

it('gives error when password is empty string', async () => {
  const { userResolver, validationService } = await setup();
  const email = 'test@test.no';
  jest.spyOn(validationService, 'isValidEmail').mockImplementation(() => true);

  await expect(userResolver.createUser({ email, password: '' })).resolves.toEqual({
    message: 'Password is required',
    code: 'PASSWORD_REQUIRED',
  });
});

it('returns the user', async () => {
  const { userResolver, validationService, userService, password } = await setup();

  const email = 'test@test.no';
  jest.spyOn(validationService, 'isValidEmail').mockImplementation(() => true);
  jest
    .spyOn(userService, 'createUser')
    .mockResolvedValue({ id: '1', email, password, salt: 'in the wound' });

  await expect(userResolver.createUser({ email, password })).resolves.toEqual(
    expect.objectContaining({
      id: '1',
      email,
    }),
  );
});
