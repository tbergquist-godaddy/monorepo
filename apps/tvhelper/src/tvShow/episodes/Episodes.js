// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type FragmentContainerType } from '@tbergq/relay';
import styled from 'styled-components';

import type { Episodes_episodes as EpisodeType } from './__generated__/Episodes_episodes.graphql';
import Episode from './Episode';

type Props = {|
  +episodes: ?EpisodeType,
|};

const ListWrapper = styled.div({
  overflow: 'hidden',
});

const Card = styled.div(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.gray}`,
}));

const CardTitle = styled.h2(({ theme }) => ({
  fontSize: theme.fontSize.large,
  fontWeight: '500',
}));

const CardSection = styled.div(({ theme }) => ({
  padding: theme.spacing.xxxLarge,
}));

const Episodes = (props: Props) => {
  const episodes = props.episodes?.episodes;

  const seasonMap = React.useMemo(() => {
    const map = new Map();

    if (episodes == null) {
      return map;
    }

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
      <CardSection>
        <CardTitle>{`Season ${parseInt(key, 10).toString()}`}</CardTitle>
        <ListWrapper>
          {episodes.map((episode) => (
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
