// @flow

import * as React from 'react';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { QueryRenderer, graphql } from '@tbergq/relay';
import { render, act, fireEvent, screen } from '@tbergq/test-utils';

import AddProgramForm from '../AddProgramForm';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query AddProgramFormTestQuery @relay_test_operation {
        viewer {
          ...AddProgramForm_user
        }
      }
    `}
    variables={{}}
    render={props => <AddProgramForm user={props.viewer} />}
  />
);

it('show required error if name is not inputed', async () => {
  const { container } = render(<TestRenderer />);

  environment.mock.resolveMostRecentOperation(MockPayloadGenerator.generate);

  const addButton = screen.getByTestId('AddProgramButton');
  fireEvent.click(addButton);
  const required = await screen.queryByText('Required');
  expect(required).not.toBeInTheDocument();
  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.click(container.querySelector('button[type="submit"]'));
  });

  expect(screen.getByText('Required')).toBeInTheDocument();
  expect(environment.mock.getAllOperations()).toHaveLength(0); // No mutation triggered
});
