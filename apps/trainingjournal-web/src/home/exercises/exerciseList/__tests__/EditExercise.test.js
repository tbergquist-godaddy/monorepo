// @flow

import * as React from 'react';
import { render, act, fireEvent } from '@tbergq/test-utils';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { graphql, QueryRenderer } from '@tbergq/relay';

import EditExercise from '../EditExercise';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = ({ onClose }) => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query EditExerciseTestQuery @relay_test_operation {
        viewer {
          ... on TraningJournalViewer {
            exercises(first: 1) {
              edges {
                node {
                  ...EditExercise_exercise
                }
              }
            }
          }
        }
      }
    `}
    variables={{}}
    render={props => (
      <EditExercise exercise={props?.viewer.exercises.edges[0].node} onClose={onClose} />
    )}
  />
);

it('updates an exercise', async () => {
  const onClose = jest.fn();
  const { container } = render(<TestRenderer onClose={onClose} />);

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation),
  );

  const input = container.querySelector('input[name="name"]');
  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(input, { target: { name: 'name', value: 'My exercise' } });
  });

  // $FlowFixMe: (add testing-library flow types)
  expect(input.value).toBe('My exercise');
  const submit = container.querySelector('button[type="submit"]');

  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.click(submit);
  });

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation),
  );

  expect(onClose).toHaveBeenCalledWith();
});
