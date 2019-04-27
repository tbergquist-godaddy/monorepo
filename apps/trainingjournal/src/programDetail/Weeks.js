// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';

import type { Weeks_program as ProgramType } from './__generated__/Weeks_program.graphql';

type Props = {|
  +program: ?ProgramType,
|};

export const Weeks = (props: Props) => {
  const weeks = props.program?.weeks?.edges ?? [];
  return (
    <div>
      {weeks.map(week => (
        <div key={week?.node?.id}>{week?.node?.name}</div>
      ))}
    </div>
  );
};

export default createFragmentContainer(Weeks, {
  program: graphql`
    fragment Weeks_program on Program {
      weeks {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `,
});
