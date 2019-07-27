// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';
import { Autocomplete } from '@tbergq/components';

import type { SelectExerciseQueryResponse } from './__generated__/SelectExerciseQuery.graphql';

type Props = {|
  +onSelect: string => void,
|};

const SelectExerciseQuery = (props: Props) => {
  const renderInner = React.useCallback(
    (renderProps: SelectExerciseQueryResponse) => {
      const edges = renderProps.baseExercises?.edges ?? [];
      const data = edges.map(edge => ({
        id: edge?.node?.id ?? '',
        name: edge?.node?.name ?? '',
      }));
      return <Autocomplete values={data} onSelect={props.onSelect} label="Exercise" />;
    },
    [props.onSelect],
  );
  return (
    <QueryRenderer
      query={graphql`
        query SelectExerciseQuery {
          baseExercises(first: 1000) {
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
      variables={{}}
    />
  );
};

export default SelectExerciseQuery;
