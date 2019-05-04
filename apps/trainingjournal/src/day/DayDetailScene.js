// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';

import type { DayDetailSceneQueryResponse } from './__generated__/DayDetailSceneQuery.graphql';
import DayDetail from './DayDetail';

type Props = {|
  +dayId: string,
|};

export default function DayDetailScene(props: Props) {
  const render = React.useCallback(
    (renderProps: DayDetailSceneQueryResponse) => {
      return <DayDetail day={renderProps.day} />;
    },
    [],
  );
  return (
    <QueryRenderer
      query={graphql`
        query DayDetailSceneQuery($dayId: ID!) {
          day(dayId: $dayId) {
            ...DayDetail_day
          }
        }
      `}
      variables={{ dayId: props.dayId }}
      render={render}
    />
  );
}
