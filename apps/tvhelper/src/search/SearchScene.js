// @flow

import * as React from 'react';
import { Stack } from '@tbergq/components';
import Router, { useRouter } from 'next/router';

import SearchForm from './SearchForm';
import SearchQuery from './SearchQuery';

export default function SearchScene() {
  const router = useRouter();
  const [query, onQueryChange] = React.useState(router.query?.query ?? '');

  function onSubmit(query: string) {
    onQueryChange(query);
    const href = `/?query=${query}`;
    const as = href;
    Router.push(href, as, { shallow: true });
  }

  return (
    <>
      <Stack>
        <SearchForm onSubmit={onSubmit} />
      </Stack>
      <Stack>
        <SearchQuery query={query} />
      </Stack>
    </>
  );
}
