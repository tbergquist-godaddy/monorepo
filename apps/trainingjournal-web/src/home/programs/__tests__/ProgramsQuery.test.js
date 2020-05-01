// @flow

import * as React from 'react';
import { render, act, fireEvent, screen } from '@tbergq/test-utils';
import { RelayEnvironmentProvider } from '@tbergq/relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import ProgramsQuery from '../ProgramsQuery';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <RelayEnvironmentProvider environment={environment}>
    <ProgramsQuery />
  </RelayEnvironmentProvider>
);

it('add new items to the connection', async () => {
  render(<TestRenderer />);

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Viewer: () => ({
        __typename: 'TraningJournalViewer',
        id: '1',
        programs: () => null,
      }),
    }),
  );

  const addButton = screen.getByTestId('AddProgramButton');

  fireEvent.click(addButton);
  const nameInput = screen.getByLabelText('Name');

  await act(async () => {
    await fireEvent.change(nameInput, { target: { name: 'name', value: 'My new program' } });
  });
  const submitButton = screen.getByText('Save');

  await act(async () => {
    await fireEvent.click(submitButton);
  });

  act(() => {
    environment.mock.resolveMostRecentOperation(operation => {
      return MockPayloadGenerator.generate(operation, {
        Program() {
          return { name: 'My new program' };
        },
      });
    });
  });
  expect(screen.getByText('My new program')).toBeInTheDocument();
});
