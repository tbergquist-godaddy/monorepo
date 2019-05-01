// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { Heading } from '@tbergq/components';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { Program_program as ProgramType } from './__generated__/Program_program.graphql';
import Weeks from './Weeks';

const WeekList = styled('div')({
  marginTop: defaultTokens.spaceSmall,
});

type Props = {|
  +program: ?ProgramType,
|};

export const Program = (props: Props) => {
  const programName = props.program?.name ?? '';
  return (
    <div>
      <Heading>{programName}</Heading>
      <WeekList>
        <Weeks program={props.program} />
      </WeekList>
    </div>
  );
};

export default createFragmentContainer(Program, {
  program: graphql`
    fragment Program_program on Program {
      name
      ...Weeks_program
    }
  `,
});
