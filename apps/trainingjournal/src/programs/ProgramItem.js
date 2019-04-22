// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { ListItem } from '@tbergq/tvhelper-components';

import type { ProgramItem_program as Program } from './__generated__/ProgramItem_program.graphql';

type Props = {|
  +program: ?Program,
|};

const ProgramItem = (props: Props) => {
  const name = props.program?.name ?? '';
  return <ListItem icon={null} title={name} />;
};
export default createFragmentContainer(ProgramItem, {
  program: graphql`
    fragment ProgramItem_program on Program {
      name
    }
  `,
});
