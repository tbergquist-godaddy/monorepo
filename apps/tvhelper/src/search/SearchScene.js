// @flow

import * as React from 'react';
import { Row, Col } from '@tbergq/components';
import Router from 'next/router';

import SearchForm from './SearchForm';
import SearchQuery from './SearchQuery';

type Props = {|
  +query: ?string,
|};

export default function SearchScene(props: Props) {
  const [query, onQueryChange] = React.useState(props.query ?? '');

  function onSubmit(query: string) {
    onQueryChange(query);
    const href = `/?query=${query}`;
    const as = href;
    Router.push(href, as, { shallow: true });
  }
  return (
    <Row>
      <Col md={6} sm={12} xs={12}>
        <SearchForm onSubmit={onSubmit} />
      </Col>
      <Col md={6} sm={12} xs={12}>
        <SearchQuery query={query} />
      </Col>
    </Row>
  );
}
