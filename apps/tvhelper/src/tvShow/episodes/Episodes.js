// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type FragmentContainerType } from '@tbergq/relay';
import { Card, CardSection } from '@kiwicom/orbit-components';
import styled from 'styled-components';

import type { Episodes_episodes as EpisodeType } from './__generated__/Episodes_episodes.graphql';
import Episode from './Episode';

type Props = {|
  +episodes: ?EpisodeType,
|};

const ListWrapper = styled.div({
  overflow: 'hidden',
});

const Episodes = (props: Props) => {
  const episodes = props.episodes?.episodes ?? [];
  const seasonMap = React.useMemo(() => {
    const map = new Map();
    for (const episode of episodes) {
      if (episode?.seasonAndNumber != null) {
        const match = /^s(?<season>\d{2})/i.exec(episode.seasonAndNumber);
        if (match?.groups != null) {
          const season = match.groups.season;
          if (map.has(season)) {
            const seasonEpisodes = map.get(season);
            if (seasonEpisodes != null) {
              seasonEpisodes.push(episode);
            }
          } else {
            map.set(season, [episode]);
          }
        }
      }
    }
    return map;
  }, [episodes]);

  return Array.from(seasonMap).map<React.Node>(([key, episodes]) => (
    <Card key={key}>
      <CardSection title={`Season ${parseInt(key, 10).toString()}`} expandable={true}>
        <ListWrapper>
          {episodes.map(episode => (
            <Episode key={episode?.id} episode={episode} />
          ))}
        </ListWrapper>
      </CardSection>
    </Card>
  ));
};

export default (createFragmentContainer(Episodes, {
  episodes: graphql`
    fragment Episodes_episodes on TvShow {
      episodes {
        id
        seasonAndNumber
        ...Episode_episode
      }
    }
  `,
}): FragmentContainerType<Props, React.Node>);
