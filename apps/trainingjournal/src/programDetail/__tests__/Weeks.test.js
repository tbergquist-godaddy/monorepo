// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { create } from 'react-test-renderer';

import Weeks from '../Weeks';

const renderInner = props => <Weeks program={props.program} />;

test('Weeks', () => {
  const environment = createMockEnvironment();
  const TestRenderer = () => (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query WeeksQuery @relay_test_operation {
          program(programId: "123") {
            ...Weeks_program
          }
        }
      `}
      variables={{}}
      onResponse={renderInner}
    />
  );
  const renderer = create(<TestRenderer />);
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation),
  );

  expect(renderer).toMatchSnapshot();
});
