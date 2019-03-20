// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { ListItem } from '@tbergq/tvhelper-components';
import format from 'date-fns/format';

import type { Episode_episode as EpisodeType } from './__generated__/Episode_episode.graphql';

type Props = {|
  +episode: ?EpisodeType,
|};

const Episode = (props: Props) => {
  const name = props.episode?.name ?? '';
  const date = format(props.episode?.airdate ?? '', 'Do MMM YYYY');
  const seasonAndNumber = props.episode?.seasonAndNumber ?? '';
  const summary = props.episode?.summary ?? '';
  const watched = props.episode?.watched === true;
  const listProps = {
    title: `${seasonAndNumber} - ${name} - ${date}`,
    description: summary,
    icon: null,
    selectable: true,
    selected: watched,
  };
  return <ListItem {...listProps} />;
};

export default createFragmentContainer(Episode, {
  episode: graphql`
    fragment Episode_episode on Episode {
      name
      seasonAndNumber
      airdate
      summary
      watched
    }
  `,
});
