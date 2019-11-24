// @flow

/* eslint-disable no-param-reassign */

export default function constParams(test: string) {
  // $FlowExpectedError: Testing that const_params produces error
  test = 'lol';
  return test;
}
