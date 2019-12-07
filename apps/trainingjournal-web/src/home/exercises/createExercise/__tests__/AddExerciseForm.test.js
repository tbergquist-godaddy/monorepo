// @flow

import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { graphql, QueryRenderer } from '@tbergq/relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import AddExerciseForm from '../AddExerciseForm';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query AddExerciseFormTestQuery @relay_test_operation {
        viewer {
          ...AddExerciseForm_user
          ... on TraningJournalViewer {
            exercises(first: 1) @connection(key: "ExerciseList_exercises") {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    `}
    variables={{}}
    render={props => (
      <>
        <AddExerciseForm user={props.viewer} />
        {props.viewer.exercises.edges.map(e => (
          <div key={e.node.id} data-test={e.node.id} />
        ))}
      </>
    )}
  />
);

it('show required error', async () => {
  const { container, getByText } = render(<TestRenderer />);

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation),
  );
  const button = container.querySelector('button');

  await act(async () => {
    await fireEvent.click(button);
  });
  const submitButton = container.querySelector('button[type="submit"]');

  await act(async () => {
    await fireEvent.click(submitButton);
  });
  expect(getByText('Required')).toBeInTheDocument();
});

it('add an exercise', async () => {
  const { container, getByTestId } = render(<TestRenderer />);

  environment.mock.resolveMostRecentOperation(operation => {
    return MockPayloadGenerator.generate(operation, {
      ID(_, generateId) {
        return generateId().toString();
      },
    });
  });

  const addButton = container.querySelector('button');

  await act(async () => {
    await fireEvent.click(addButton);
  });

  const name = container.querySelector('input[name="name"]');
  const muscleGroup = container.querySelector('input[name="muscleGroups"]');
  const videoUrl = container.querySelector('input[name="videoUrl"]');
  const description = container.querySelector('input[name="description"]');

  await act(async () => {
    await fireEvent.change(name, { target: { name: 'name', value: 'Knebøy' } });
    await fireEvent.change(muscleGroup, { target: { name: 'muscleGroups', value: 'Lår' } });
    await fireEvent.change(videoUrl, {
      target: { name: 'videoUrl', value: 'https://www.mock.no' },
    });
    await fireEvent.change(description, {
      target: { name: 'description', value: 'Rolig ned, lår parallell med underlag' },
    });
  });

  const submitButton = container.querySelector('button[type="submit"]');

  await act(async () => {
    await fireEvent.click(submitButton);
  });

  act(() => {
    environment.mock.resolveMostRecentOperation(operation => {
      return MockPayloadGenerator.generate(operation, {
        ID() {
          return 'new-exercise';
        },
      });
    });
  });

  expect(getByTestId('new-exercise')).toBeInTheDocument();
});
