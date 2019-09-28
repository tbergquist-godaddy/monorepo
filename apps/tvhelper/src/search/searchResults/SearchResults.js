// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type RelayEnvironmentType } from '@tbergq/relay';
import { TvShowList } from '@tbergq/tvhelper-xplat';
import { useRouter } from 'next/router';

import type { SearchResults_results as ResultsType } from './__generated__/SearchResults_results.graphql';

type NavigationOptions = {|
  +id: ?string,
  +name: ?string,
  +environment: RelayEnvironmentType,
|};

type Props = {|
  +results: ?ResultsType,
|};

const SearchResults = (props: Props) => {
  const router = useRouter();
  const onPress = ({ id }: NavigationOptions) => {
    router.push({
      pathname: '/tvShow',
      query: { id },
    });
  };
  return <TvShowList data={props.results} onPress={onPress} />;
};

export default createFragmentContainer(SearchResults, {
  results: graphql`
    fragment SearchResults_results on TvShowConnection {
      ...TvShowList_data
    }
  `,
});
