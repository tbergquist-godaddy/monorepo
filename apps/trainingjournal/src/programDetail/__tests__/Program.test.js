// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { create } from 'react-test-renderer';

import Program from '../Program';

const renderInner = props => <Program program={props.program} />;

test('Program', () => {
  const environment = createMockEnvironment();
  const TestRenderer = () => (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProgramQuery @relay_test_operation {
          program(programId: "123") {
            ...Program_program
          }
        }
      `}
      variables={{}}
      onResponse={renderInner}
    />
  );
  const renderer = create(<TestRenderer />);
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Program: () => ({ name: 'Program name' }),
    }),
  );

  expect(renderer).toMatchSnapshot();
});
