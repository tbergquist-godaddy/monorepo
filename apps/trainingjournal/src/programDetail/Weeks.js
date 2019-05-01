// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { Weeks_program as ProgramType } from './__generated__/Weeks_program.graphql';
import Week from './Week';

const Separator = styled.div({
  marginBottom: defaultTokens.spaceXSmall,
});

type Props = {|
  +program: ?ProgramType,
|};

export const Weeks = (props: Props) => {
  const weeks = props.program?.weeks?.edges ?? [];
  return (
    <div>
      {weeks.map(week => (
        <React.Fragment key={week?.node?.id}>
          <Week week={week?.node} />
          <Separator />
        </React.Fragment>
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
            ...Week_week
          }
        }
      }
    }
  `,
});
