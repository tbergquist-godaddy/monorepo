// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@tbergq/relay';
import { ListItem } from '@tbergq/components';
import { format, isValid } from 'date-fns';
import { nb } from 'date-fns/locale';

import type { ProgramListItem_program as Program } from './__generated__/ProgramListItem_program.graphql';

type Props = {|
  +program: ?Program,
|};

const formatDate = (dateString: ?string) => {
  const invalidString = 'Invalid date';
  if (dateString == null) {
    return invalidString;
  }
  const date = new Date(dateString);
  return isValid(date) ? format(date, 'P', { locale: nb }) : invalidString;
};

function ProgramListItem(props: Props) {
  const name = props.program?.name ?? '';
  const date = props.program?.date ?? '';
  const formattedDate = formatDate(date);
  return <ListItem icon={null} title={name} description={`Created ${formattedDate}`} />;
}

export default createFragmentContainer(ProgramListItem, {
  program: graphql`
    fragment ProgramListItem_program on Program {
      name
      date
    }
  `,
});
