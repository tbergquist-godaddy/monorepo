// @flow

import * as React from 'react';
import { Row, Col } from '@tbergq/tvhelper-components';

import SearchForm from './SearchForm';
import SearchQuery from './SearchQuery';

export default function SearchScene() {
  const [query, onQueryChange] = React.useState('');

  function onSubmit(query: string) {
    onQueryChange(query);
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
