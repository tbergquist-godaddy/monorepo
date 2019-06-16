// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Toast from '../Toast';

jest.useFakeTimers();

it('renders', () => {
  expect(create(<Toast onHide={jest.fn()} />)).toMatchInlineSnapshot(`
    <div
      className="sc-bdVaJa hoicaJ"
    >
      <div
        className="sc-bwzfXH iNPUwu"
      />
    </div>
  `);
});

it('calls onHide', () => {
  const onHide = jest.fn();
  const wrapper = create(<Toast onHide={onHide} />);
  const instance = wrapper.getInstance();
  instance.show('Test');

  jest.runAllTimers();

  expect(onHide).toHaveBeenCalledWith();
});
