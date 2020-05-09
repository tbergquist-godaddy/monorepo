// @flow

import * as React from 'react';
import { render, fireEvent } from '@tbergq/test-utils';

import App from '..';

describe('App', () => {
  it('handles select and deselect correctly', () => {
    const { container, getByTestId } = render(<App />);

    const firstLi = container.querySelectorAll('.List__item')[0];

    expect(firstLi).toBeInTheDocument();

    fireEvent.click(firstLi);

    expect(firstLi.classList.contains('selected')).toBe(true);

    const selectedItems = getByTestId('selectedItems');
    expect(selectedItems.textContent).toEqual(firstLi.textContent);

    fireEvent.click(firstLi);

    expect(selectedItems).not.toBeInTheDocument();
  });
});
