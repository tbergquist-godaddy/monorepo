// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { create } from 'react-test-renderer';

import Days from '../Days';

const renderInner = props => <Days week={props.program.weeks.edges[0].node} />;

describe('Days', () => {
  it('renders', () => {
    const environment = createMockEnvironment();
    const TestRenderer = () => (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query DaysQuery @relay_test_operation {
            program(programId: "123") {
              weeks {
                edges {
                  node {
                    ...Days_week
                  }
                }
              }
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
});
