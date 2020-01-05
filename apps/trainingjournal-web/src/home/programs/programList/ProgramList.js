// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@tbergq/relay';

import type { ProgramList_viewer as Viewer } from './__generated__/ProgramList_viewer.graphql';
import ProgramListItem from './ProgramListItem';

type Props = {|
  +viewer: ?Viewer,
|};

function ProgramList(props: Props) {
  const edges = props.viewer?.programs?.edges ?? [];
  return edges.map<React.Element<typeof ProgramListItem>>(edge => (
    <ProgramListItem program={edge?.node} key={edge?.node?.id} />
  ));
}

export default createFragmentContainer(ProgramList, {
  viewer: graphql`
    fragment ProgramList_viewer on TraningJournalViewer {
      programs {
        edges {
          node {
            id
            ...ProgramListItem_program
          }
        }
      }
    }
  `,
});
