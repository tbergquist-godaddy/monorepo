import { ReactNode, useMemo } from 'react';
import { graphql, useFragment } from 'react-relay';
import styled from 'styled-components';
import type { Episodes_episodes$key as EpisodeType } from '__generated__/Episodes_episodes.graphql';
import Box from 'components/Box';

import Episode from './Episode';

type Props = Readonly<{
  episodes: EpisodeType;
}>;

const Card = styled.div(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.gray}`,
}));

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 500;
`;

const Episodes = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment Episodes_episodes on TvShow {
        episodes {
          id
          seasonAndNumber
          ...Episode_episode
        }
      }
    `,
    props.episodes,
  );
  const episodes = data?.episodes;

  const seasonMap = useMemo(() => {
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

  return Array.from(seasonMap).map<ReactNode>(([key, episodes]) => (
    <Card key={key}>
      <Box p={8}>
        <CardTitle>{`Season ${parseInt(key, 10).toString()}`}</CardTitle>
        <Box overflow="hidden">
          {episodes.map((episode) => (
            <Episode key={episode?.id} episode={episode} />
          ))}
        </Box>
      </Box>
    </Card>
  ));
};

export default Episodes;
