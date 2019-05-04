// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';

import type { DayDetailSceneQueryResponse } from './__generated__/DayDetailSceneQuery.graphql';

type Props = {|
  +dayId: string,
|};

export default function DayDetailScene(props: Props) {
  const render = React.useCallback(
    (renderProps: DayDetailSceneQueryResponse) => {
      return <div>{renderProps.day?.name}</div>;
    },
    [],
  );
  return (
    <QueryRenderer
      query={graphql`
        query DayDetailSceneQuery($dayId: ID!) {
          day(dayId: $dayId) {
            name
          }
        }
      `}
      variables={{ dayId: props.dayId }}
      render={render}
    />
  );
}
