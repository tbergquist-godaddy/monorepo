// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Toast from '../Toast';

jest.useFakeTimers();

it('renders', () => {
  expect(create(<Toast message="test" onHide={jest.fn()} />))
    .toMatchInlineSnapshot(`
    <div
      className="sc-bdVaJa dNRzKi"
    >
      test
    </div>
  `);
});

it('calls onHide', () => {
  const onHide = jest.fn();
  const wrapper = create(<Toast message="test" onHide={onHide} />);
  wrapper.update();
  jest.runAllTimers();

  expect(onHide).toHaveBeenCalledWith();
});
