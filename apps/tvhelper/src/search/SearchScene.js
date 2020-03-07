// @flow

import * as React from 'react';
import { Stack, Heading } from '@tbergq/components';
import Router, { useRouter } from 'next/router';
import { Formik } from 'formik';
import { createRefetchContainer, graphql, type RefetchRelayProp } from '@tbergq/relay';

import SearchForm from './SearchForm';
import SearchResults from './searchResults/SearchResults';
import type { SearchScene_search as Search } from './__generated__/SearchScene_search.graphql';
import type { SearchScene_viewer as Viewer } from './__generated__/SearchScene_viewer.graphql';
import Layout from '../components/Layout';

type Props = {
  +search: ?Search,
  +viewer: ?Viewer,
  +relay: RefetchRelayProp,
};

function SearchScene(props: Props) {
  const router = useRouter();

  function onSubmit({ query }: { +query: string }) {
    const href = `/?query=${query}`;
    const as = href;
    Router.push(href, as, { shallow: true });
    props.relay.refetch({
      query,
      includeResults: !!query,
    });
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={{ query: router.query?.query ?? '' }}>
      <Layout viewer={props.viewer?.viewer}>
        <Heading element="h1">Search tv show</Heading>
        <Stack>
          <SearchForm />
        </Stack>
        <Stack>
          <SearchResults results={props.search?.searchTvShow ?? null} />
        </Stack>
      </Layout>
    </Formik>
  );
}

export default createRefetchContainer(
  SearchScene,
  {
    search: graphql`
      fragment SearchScene_search on RootQuery
        @argumentDefinitions(includeResults: { type: "Boolean" }, query: { type: "String!" }) {
        searchTvShow(query: $query) @include(if: $includeResults) {
          ...SearchResults_results
        }
      }
    `,
    viewer: graphql`
      fragment SearchScene_viewer on RootQuery {
        viewer {
          ...Layout_viewer
        }
      }
    `,
  },
  graphql`
    query SearchSceneRefetchQuery($query: String!, $includeResults: Boolean!) {
      ...SearchScene_search @arguments(includeResults: $includeResults, query: $query)
    }
  `,
);
