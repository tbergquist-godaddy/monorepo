// @flow

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchForm from '../SearchForm';

jest.mock('next/router', () => ({
  useRouter: () => ({ query: { query: 'myQuery' } }),
}));

describe('SearchForm', () => {
  it('handles on submit when button is clicked', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SearchForm onSubmit={onSubmit} />);

    const button = getByTestId('SearchFormButton');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(onSubmit).toHaveBeenCalledWith('myQuery');
  });

  it('sets intial input value correctly', () => {
    const { getByDisplayValue } = render(<SearchForm onSubmit={jest.fn()} />);
    expect(getByDisplayValue('myQuery')).not.toBeNull();
  });

  it('updates input value', () => {
    const { getByTestId } = render(<SearchForm onSubmit={jest.fn()} />);
    const input = getByTestId('SearchFormInput');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toEqual('test');
  });
});
