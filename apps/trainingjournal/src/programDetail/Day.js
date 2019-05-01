// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';

import type { Day_day as DayType } from './__generated__/Day_day.graphql';

type Props = {|
  +day: ?DayType,
|};

export const Day = (props: Props) => {
  return <div>{props.day?.name}</div>;
};

export default createFragmentContainer(Day, {
  day: graphql`
    fragment Day_day on Day {
      name
    }
  `,
});
