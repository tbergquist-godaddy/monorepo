// @flow

import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';

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
      />
    </>
  );
};
it('calls onHide', () => {
  const onHide = jest.fn();
  const { container } = render(<Wrapper onHide={onHide} />);
  const button = container.querySelector('button');

  act(() => {
    fireEvent.click(button);
    jest.runAllTimers();
  });

  expect(onHide).toHaveBeenCalledWith();
});
