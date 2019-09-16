// @flow

import * as React from 'react';
import { create, act } from 'react-test-renderer';
import { MockPayloadGenerator } from 'relay-test-utils';
import { QueryRenderer, graphql, Environment } from '@tbergq/relay';

import DayDetail from '../DayDetail';
import AddEcerciseForm from '../AddExerciseForm';

const renderer = props => <DayDetail day={props.day} />;
const TestRenderer = () => (
  <QueryRenderer
    query={graphql`
      query DayDetailQuery @relay_test_operation {
        day(dayId: "123") {
          ...DayDetail_day
        }
      }
    `}
    render={renderer}
    variables={{}}
  />
);

describe('DayDetail', () => {
  it('renders', () => {
    const environment = Environment.getEnvironment();
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

  it('shows form when add button is clicked', () => {
    const environment = Environment.getEnvironment();
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
    const fab = wrapper.root.findByProps({ 'data-test': 'fab' });
    act(() => {
      fab.props.onClick();
    });
    expect(wrapper.root.findByType(AddEcerciseForm)).not.toBeNull();
  });
});
