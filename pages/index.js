// @flow

import * as React from 'react';
import styled from 'styled-components';
import { QueryRenderer, graphql } from '@tbergq/tvhelper-relay';
import { Layout } from '@tbergq/tvhelper-components';

import type { pagesQueryResponse } from './__generated__/pagesQuery.graphql';

const Wrapper = styled.div({
  fontSize: 18,
});

const renderInner = (props: pagesQueryResponse) => {
  const edges = props.searchTvShow?.edges ?? [];
  return edges.map(edge => (
    <Wrapper key={edge?.node?.id}>{edge?.node?.name}</Wrapper>
  ));
};
export default function Index() {
  return (
    <Layout>
      <QueryRenderer
        query={graphql`
          query pagesQuery($query: String!) {
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
        variables={{ query: 'the 100' }}
        render={renderInner}
      />
    </Layout>
  );
}
