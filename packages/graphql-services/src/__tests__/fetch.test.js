// @flow

import fetchWithRetries from '@kiwicom/fetch';

import fetch from '../fetch';

jest.unmock('../fetch.js');

jest.mock('@kiwicom/fetch', () => {
  return jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(),
    });
  });
});

global.console = { log: jest.fn() };

const url = 'test.url';
it('assigns content-type as default header', async () => {
  await fetch(url);
  expect(fetchWithRetries).toHaveBeenCalledWith(url, {
    headers: { 'Content-Type': 'application/json' },
  });
});

it('passes along assigned config', async () => {
  const config = {
    method: 'POST',
    headers: {
      Authentication: 'Bearer Token',
    },
  };
  await fetch(url, config);
  expect(fetchWithRetries).toHaveBeenCalledWith(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authentication: 'Bearer Token',
    },
  });
});

it('throws an error if fetch fails', async () => {
  fetchWithRetries.mockReturnValueOnce(Promise.reject(new Error('Bad request')));
  await expect(fetch(url)).rejects.toThrow('Bad request');
  // eslint-disable-next-line no-console
  expect(console.log).toHaveBeenCalledWith(new Error('Bad request'));
});
