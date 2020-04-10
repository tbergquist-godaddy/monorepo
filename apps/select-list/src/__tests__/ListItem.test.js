// @flow

import * as React from 'react';
import { render, fireEvent } from '@tbergq/test-utils';

import { SelectedItemsProvider } from '../SelectedItemsContext';
import ListItem from '../ListItem';

describe('ListItem', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <SelectedItemsProvider>
        <ListItem name="List name" color="pink" />
      </SelectedItemsProvider>,
    );

    const li = getByText('List name');

    expect(li).toBeInTheDocument();
    expect(li.classList.contains('List__item--pink')).toBe(true);
  });

  it('handles onClick correctly', () => {
    const { getByText } = render(
      <SelectedItemsProvider>
        <ListItem name="List name" color="pink" />
      </SelectedItemsProvider>,
    );

    const li = getByText('List name');
    fireEvent.click(li);

    expect(li.classList.contains('selected')).toBe(true);
  });
});
