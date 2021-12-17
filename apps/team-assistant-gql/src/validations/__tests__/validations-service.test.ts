/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidationsService } from '../validations-service';

const setup = () => {
  const validationsService = new ValidationsService();
  return { validationsService };
};

const cases: any = [
  ['test@test.no', true],
  ['test@', false],
  [5, false],
  [{}, false],
  [null, false],
  [false, false],
  ['just a string', false],
];
it.each(cases)('for %s returns %j', (email, result) => {
  const { validationsService } = setup();
  expect(validationsService.isValidEmail(email)).toBe(result);
});
