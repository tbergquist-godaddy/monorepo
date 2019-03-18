// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/tvhelper-relay';
import styled from 'styled-components';

import type { SearchQueryResponse } from './__generated__/SearchQuery.graphql';

type Props = {|
  +query: string,
|};

const Wrapper = styled.div({
  fontSize: 18,
});

const renderInner = (props: SearchQueryResponse) => {
  const edges = props.searchTvShow?.edges ?? [];
  return edges.map(edge => (
    <Wrapper key={edge?.node?.id}>{edge?.node?.name}</Wrapper>
  ));
};

export default function SearchQuery(props: Props) {
  if (props.query === '') {
    return null;
  }
  return (
    <QueryRenderer
      query={graphql`
        query SearchQuery($query: String!) {
          searchTvShow(query: $query) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `}
      render={renderInner}
      variables={{ query: props.query }}
    />
  );
}
