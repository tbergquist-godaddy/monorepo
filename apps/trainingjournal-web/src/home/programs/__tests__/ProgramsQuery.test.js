// @flow

import * as React from 'react';
import { render, act, fireEvent, screen } from '@testing-library/react';
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
  const { container } = render(<TestRenderer />);

  environment.mock.resolveMostRecentOperation(MockPayloadGenerator.generate);

  const addButton = screen.getByTestId('AddProgramButton');

  fireEvent.click(addButton);
  const nameInput = container.querySelector('input[name="name"]');

  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(nameInput, { target: { name: 'name', value: 'My new program' } });
  });
  const submitButton = container.querySelector('button[type="submit"]');

  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
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
