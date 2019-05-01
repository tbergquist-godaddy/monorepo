// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { Heading, Link } from '@tbergq/components';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { Day_day as DayType } from './__generated__/Day_day.graphql';

const DayWrapper = styled.div({
  marginRight: defaultTokens.spaceXSmall,
  marginBottom: defaultTokens.spaceXSmall,
});
type Props = {|
  +day: ?DayType,
|};

export const Day = (props: Props) => {
  const exercises = props.day?.exercises?.edges ?? [];
  const dayName = props.day?.name ?? '';
  return (
    <DayWrapper>
      <Heading element="h3" type="title3">
        <Link href="/todo">{dayName}</Link>
      </Heading>
      {exercises.map(edge => (
        <div key={edge?.node?.id}>{edge?.node?.baseExercise?.name}</div>
      ))}
    </DayWrapper>
  );
};

export default createFragmentContainer(Day, {
  day: graphql`
    fragment Day_day on Day {
      name
      exercises {
        edges {
          node {
            id
            baseExercise {
              name
            }
          }
        }
      }
    }
  `,
});
