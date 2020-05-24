// @flow

import encryptPassword, { generateSalt } from '../encryptPassword';

const myPw = 'afeefEFEfae2!"#';

it('returns salt and password', () => {
  const salt = generateSalt(16);
  const password = encryptPassword(myPw, salt);
  expect(typeof salt).toBe('string');
  expect(typeof password).toBe('string');
  expect(password).not.toEqual(myPw);
});

it('does not generate the same salt twice', () => {
  const salt1 = generateSalt(16);
  const salt2 = generateSalt(16);
  expect(salt1).not.toEqual(salt2);
});
