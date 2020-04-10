// @flow

import * as React from 'react';
import { render, fireEvent } from '@tbergq/test-utils';

import FavoriteHeaderCell from '../FavoriteHeaderCell';

describe('FavoriteHeaderCell', () => {
  it('does not render icon when it is not the active header', () => {
    jest.spyOn(console, 'error').mockImplementationOnce(jest.fn());
    const { container } = render(
      <FavoriteHeaderCell sortKey="lol" sortBy="rofl" ascending={false} onClick={jest.fn()}>
        test
      </FavoriteHeaderCell>,
    );

    const svg = container.querySelector('svg');

    expect(svg).not.toBeInTheDocument();
  });

  it('renders icon correctly when it is the active header and ascending is false', () => {
    jest.spyOn(console, 'error').mockImplementationOnce(jest.fn());
    const { container } = render(
      <FavoriteHeaderCell sortKey="lol" sortBy="lol" ascending={false} onClick={jest.fn()}>
        test
      </FavoriteHeaderCell>,
    );

    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    // $FlowFixMe: (add testing-library flow types)
    expect(svg.getAttribute('deg')).toBe('-90');
  });

  it('renders icon when it is the active header and ascending is true', () => {
    jest.spyOn(console, 'error').mockImplementationOnce(jest.fn());
    const { container } = render(
      <FavoriteHeaderCell sortKey="lol" sortBy="lol" ascending={true} onClick={jest.fn()}>
        test
      </FavoriteHeaderCell>,
    );

    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    // $FlowFixMe: (add testing-library flow types)
    expect(svg.getAttribute('deg')).toBe('90');
  });

  it('calls onClick correctly', () => {
    jest.spyOn(console, 'error').mockImplementationOnce(jest.fn());
    const onClick = jest.fn();
    const { getByText } = render(
      <FavoriteHeaderCell sortKey="lol" sortBy="lol" ascending={true} onClick={onClick}>
        test
      </FavoriteHeaderCell>,
    );

    const button = getByText('test');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledWith('lol');
  });
});
