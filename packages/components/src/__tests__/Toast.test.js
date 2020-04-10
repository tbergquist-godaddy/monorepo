// @flow

import * as React from 'react';
import { render, act, fireEvent, screen } from '@tbergq/test-utils';

import Toast from '../Toast';

jest.useFakeTimers();

const Wrapper = ({ onHide }) => {
  const ref = React.useRef<React.ElementRef<typeof Toast> | null>(null);
  return (
    <>
      <Toast ref={ref} onHide={onHide} />
      <button
        type="button"
        onClick={() => {
          const show = ref.current?.show;
          if (show != null) {
            show('test');
          }
        }}
      >
        Show Toast
      </button>
    </>
  );
};
it('calls onHide', () => {
  const onHide = jest.fn();
  render(<Wrapper onHide={onHide} />);
  const button = screen.getByText('Show Toast');

  act(() => {
    fireEvent.click(button);
    jest.runAllTimers();
  });

  expect(onHide).toHaveBeenCalledWith();
});
