// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Toast from '../Toast';

jest.useFakeTimers();

it('renders', () => {
  expect(create(<Toast onHide={jest.fn()} />)).toMatchInlineSnapshot(`
    .c0 {
      position: fixed;
      bottom: 0;
      right: 0;
      min-width: 200px;
      max-height: 0;
      z-index: 100;
      background-color: #0B0C0F;
      opacity: 0.4;
      color: #FFFFFF;
      padding: 0;
      border-radius: 3px;
      -webkit-transition: max-height 0.3s ease-in-out;
      transition: max-height 0.3s ease-in-out;
    }

    .c1 {
      padding: 0;
    }

    <div
      className="c0"
    >
      <div
        className="c1"
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
