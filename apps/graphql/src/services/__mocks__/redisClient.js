// @flow

export default {
  get: (jest.fn(() => null): JestMockFn<any, any>),
  mget: (jest.fn(input => input.map(() => null)): JestMockFn<any, any>),
  set: (jest.fn(): JestMockFn<any, any>),
  mset: (jest.fn(): JestMockFn<any, any>),
  expire: (jest.fn(): JestMockFn<any, any>),
};
