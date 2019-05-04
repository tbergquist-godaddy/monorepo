// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { QueryRenderer, graphql } from '@kiwicom/relay';

import DayDetail from '../DayDetail';

const renderer = props => <DayDetail day={props.day} />;

it('renders', () => {
  const environment = createMockEnvironment();
  const TestRenderer = () => (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query DayDetailQuery @relay_test_operation {
          day(dayId: "123") {
            ...DayDetail_day
          }
        }
      `}
      onResponse={renderer}
    />
  );
  const wrapper = create(<TestRenderer />);
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Exercise: () => ({
        set: '4',
        reps: '5',
        breakTime: '2',
      }),
      BaseExercise: () => ({
        name: 'Knebøy',
      }),
    }),
  );
  expect(wrapper).toMatchSnapshot();
});
