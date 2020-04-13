// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { render, act, fireEvent, screen } from '@tbergq/test-utils';

import ExerciseList from '../ExerciseList';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ExerciseListTestQuery @relay_test_operation {
          viewer {
            ...ExerciseList_exercises
          }
        }
      `}
      variables={{}}
      render={props => <ExerciseList exercises={props?.viewer} />}
    />
  );
};
it('deletes an item and removes it from the connection', () => {
  const { getByTestId } = render(<TestRenderer />);

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      ExerciseConnection: () => ({
        edges: [{ node: { id: '1', name: 'lol' } }, { node: { id: '2', name: 'lol2' } }],
      }),
    }),
  );
  const exercise = getByTestId('1');
  expect(exercise).toBeInTheDocument();

  act(() => {
    fireEvent.click(getByTestId('deleteButton1'));
  });

  environment.mock.resolveMostRecentOperation(() => ({
    data: {
      deleteExercise: {
        success: true,
        exerciseId: 1,
      },
    },
  }));

  expect(exercise).not.toBeInTheDocument();
  expect(getByTestId('2')).toBeInTheDocument();
});

it('fetches more exercises', () => {
  const { getByTestId } = render(<TestRenderer />);

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      ID(_, generateId) {
        return `first-page-id-${generateId()}`;
      },
      PageInfo() {
        return {
          hasNextPage: true,
        };
      },
    }),
  );
  const loadMore = getByTestId('loadMore');
  expect(loadMore).toBeInTheDocument();

  const firstPageItems = screen.getAllByTestId(/editButtonfirst-page-id/);
  expect(firstPageItems.length).toBeGreaterThan(0);
  fireEvent.click(loadMore);

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      ID(_, generateId) {
        return `second-page-id-${generateId()}`;
      },
      PageInfo() {
        return {
          hasNextPage: false,
        };
      },
    }),
  );

  expect(loadMore).not.toBeInTheDocument();

  const secondPageItems = screen.getAllByTestId(/editButtonsecond-page-id/);
  expect(secondPageItems.length).toBeGreaterThan(0);
});
