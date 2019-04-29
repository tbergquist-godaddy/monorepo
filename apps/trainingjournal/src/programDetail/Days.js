// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import styled from 'styled-components';

import type { Days_week as WeekType } from './__generated__/Days_week.graphql';
import Day from './Day';

const DaysContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

type Props = {|
  +week: ?WeekType,
|};

export const Days = (props: Props) => {
  const days = props.week?.days?.edges ?? [];
  return (
    <div>
      <DaysContainer>
        {days.map(day => (
          <Day key={day?.node?.id} day={day?.node} />
        ))}
      </DaysContainer>
    </div>
  );
};

export default createFragmentContainer(Days, {
  week: graphql`
    fragment Days_week on Week {
      days {
        edges {
          node {
            id
            ...Day_day
          }
        }
      }
    }
  `,
});
