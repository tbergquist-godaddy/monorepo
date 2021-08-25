import { ReactNode } from 'react';
import { graphql, useFragment } from 'react-relay';
import { SearchResults_results$key as ResultsType } from '__generated__/SearchResults_results.graphql';

import TvShowListItem from './TvShowListItem';
import { classNames } from './SearchResults.css';

type Props = {
  results: ResultsType;
};

const SearchResults = (props: Props): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment SearchResults_results on TvShowConnection {
        edges {
          node {
            id
            ...TvShowListItem_data
          }
        }
      }
    `,
    props.results,
  );

  const edges = data.edges ?? [];
  return (
    <div className={classNames.gridContainer}>
      {edges.map<ReactNode>((item) => (
        <TvShowListItem data={item?.node} key={item?.node?.id} />
      ))}
    </div>
  );
};

export default SearchResults;
