import { AuthService } from '../auth-service';

const setup = () => {
  const authService = new AuthService();

  return {
    authService,
  };
};

it('generates a hashed password', async () => {
  const { authService } = setup();
  const password = 'password';
  const { hash } = await authService.hashPassword(password);

  expect(typeof hash).toBe('string');
  expect(hash).not.toBe(password);
});

it('generates different hash for same password', () => {
  const { authService } = setup();
  const password = 'password';
  const { hash: hash1 } = authService.hashPassword(password);
  const { hash: hash2 } = authService.hashPassword(password);

  expect(hash1).not.toBe(hash2);
});
