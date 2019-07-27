// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { create } from 'react-test-renderer';

import Day from '../Day';

const renderInner = props => <Day day={props.program.weeks.edges[0].node.days.edges[0].node} />;

test('Day', () => {
  const environment = createMockEnvironment();
  const TestRenderer = () => (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query DayQuery @relay_test_operation {
          program(programId: "123") {
            weeks {
              edges {
                node {
                  days {
                    edges {
                      node {
                        ...Day_day
                      }
                    }
                  }
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
    MockPayloadGenerator.generate(operation, {
      Day: () => ({ name: 'Day name' }),
    }),
  );

  expect(renderer).toMatchSnapshot();
});
