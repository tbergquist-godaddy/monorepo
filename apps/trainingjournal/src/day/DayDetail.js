// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@tbergq/relay';
import { Heading } from '@tbergq/components';

import type { DayDetail_day as DayType } from './__generated__/DayDetail_day.graphql';
import ExerciseTable from './ExerciseTable';

type Props = {|
  +day: ?DayType,
|};

const DayDetail = (props: Props) => {
  const dayName = props.day?.name ?? '';
  return (
    <>
      <Heading>{dayName}</Heading>
      <ExerciseTable day={props.day} />
    </>
  );
};

export default createFragmentContainer(DayDetail, {
  day: graphql`
    fragment DayDetail_day on Day {
      name
      ...ExerciseTable_day
    }
  `,
});
