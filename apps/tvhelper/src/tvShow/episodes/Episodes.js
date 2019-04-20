// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';

import type { Episodes_episodes as EpisodeType } from './__generated__/Episodes_episodes.graphql';
import Episode from './Episode';

type Props = {|
  +episodes: ?EpisodeType,
|};

const Episodes = (props: Props) => {
  const episodes = props.episodes?.episodes ?? [];
  return episodes.map(episode => (
    <Episode key={episode?.id} episode={episode} />
  ));
};

export default createFragmentContainer(Episodes, {
  episodes: graphql`
    fragment Episodes_episodes on TvShow {
      episodes {
        id
        ...Episode_episode
      }
    }
  `,
});
