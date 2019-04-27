// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { ListItem } from '@tbergq/tvhelper-components';
import Router from 'next/router';

import type { ProgramItem_program as Program } from './__generated__/ProgramItem_program.graphql';

type Props = {|
  +program: ?Program,
|};

const ProgramItem = (props: Props) => {
  const name = props.program?.name ?? '';
  const programId = props.program?.id;
  const onClick = React.useCallback(() => {
    Router.push({
      pathname: '/programs/detail',
      query: {
        programId,
      },
    });
  }, [programId]);
  return <ListItem icon={null} title={name} onClick={onClick} />;
};
export default createFragmentContainer(ProgramItem, {
  program: graphql`
    fragment ProgramItem_program on Program {
      id
      name
    }
  `,
});
