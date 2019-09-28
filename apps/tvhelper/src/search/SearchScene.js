// @flow

import * as React from 'react';
import { Row, Col } from '@tbergq/components';
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
    <Row>
      <Col xs={12}>
        <SearchForm onSubmit={onSubmit} />
      </Col>
      <Col xs={12}>
        <SearchQuery query={query} />
      </Col>
    </Row>
  );
}
