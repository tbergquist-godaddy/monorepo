// @flow

import * as React from 'react';
import { render } from '@tbergq/test-utils';
import { QueryRenderer, graphql } from '@tbergq/relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import Layout from '../Layout';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query LayoutTestQuery @relay_test_operation {
          viewer {
            ...Layout_viewer
          }
        }
      `}
      variables={{}}
      render={props => (
        <Layout viewer={props.viewer}>
          <div />
        </Layout>
      )}
    />
  );
};

it('does not render favorites link when not logged in', () => {
  const { queryByText } = render(<TestRenderer />);
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Viewer: () => ({ __typename: 'Unauthorized' }),
    }),
  );

  expect(queryByText('Favorites')).not.toBeInTheDocument();
});

it('renders favorites link when logged in', () => {
  const { getByText } = render(<TestRenderer />);
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Viewer: () => ({ __typename: 'TvHelperViewer' }),
    }),
  );
  expect(getByText('Favorites')).toBeInTheDocument();
});

it('renders login link when not logged in', () => {
  const { getByText, queryByText } = render(<TestRenderer />);
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Viewer: () => ({ __typename: 'Unauthorized' }),
    }),
  );
  expect(getByText('login')).toBeInTheDocument();
  expect(queryByText('logout')).not.toBeInTheDocument();
});

it('renders logout link when logged in', () => {
  const { queryByText, getByText } = render(<TestRenderer />);
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Viewer: () => ({ __typename: 'TvHelperViewer' }),
    }),
  );
  expect(queryByText('login')).not.toBeInTheDocument();
  expect(getByText('logout')).toBeInTheDocument();
});
