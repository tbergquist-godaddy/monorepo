// @flow

import ensureUniqueFields from '../ensureUniqueFields';

it('generates correct objects', () => {
  expect(ensureUniqueFields([{ id: {} }, { lol: {} }])).toEqual({
    id: {},
    lol: {},
  });
});

it('throws an error for duplicated fields', () => {
  expect(() => {
    ensureUniqueFields([{ id: {} }, { lol: {}, id: {} }]);
  }).toThrowError('Duplicated field id.');
});
