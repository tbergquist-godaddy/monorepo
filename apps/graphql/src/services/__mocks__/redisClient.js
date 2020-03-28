// @flow

export default {
  // $FlowFixMe
  get: jest.fn(() => null),
  // $FlowFixMe
  mget: jest.fn(input => input.map(() => null)),
  // $FlowFixMe
  set: jest.fn(),
  // $FlowFixMe
  mset: jest.fn(),
  // $FlowFixMe
  expire: jest.fn(),
};
