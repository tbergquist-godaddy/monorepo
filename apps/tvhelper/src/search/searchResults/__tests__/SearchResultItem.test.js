// @flow

import * as React from 'react';
import { unwrapContainer } from 'relay-test-utils';
import { render, fireEvent } from '@testing-library/react';
import Router from 'next/router';

import SearchResultListItemFragment from '../SearchResultItem';

const SearchResultListItem = unwrapContainer(SearchResultListItemFragment);
const $refType: any = null;

const tvShow = {
  name: 'The 100',
  rating: 5,
  id: '123',
  $refType,
};

it('redirects correctly when pressed', () => {
  const spy = jest.spyOn(Router, 'push').mockImplementationOnce(jest.fn());
  const { getByTestId } = render(
    <SearchResultListItem dataTest="SearchResultListItem" tvShow={tvShow} />,
  );
  const item = getByTestId('SearchResultListItem');
  fireEvent.click(item);

  expect(spy).toHaveBeenCalledWith({
    pathname: '/tvShow',
    query: { id: '123' },
  });
});
