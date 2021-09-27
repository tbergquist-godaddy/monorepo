import { ReactNode, useMemo } from 'react';
import { graphql, useFragment } from 'react-relay';
import type { Episodes_episodes$key as EpisodeType } from '__generated__/Episodes_episodes.graphql';
import { Box } from '@tbergq/components';
import Episode from 'episodes/episode-list-item';

import { classNames } from './Episodes.css';

type Props = Readonly<{
  episodes: EpisodeType;
}>;

const Episodes = (props: Props): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment Episodes_episodes on TvShow {
        episodes {
          id
          seasonAndNumber
          ...episodeListItem
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

  return (
    <>
      {Array.from(seasonMap).map<ReactNode>(([key, episodes]) => (
        <div className={classNames.card} key={key}>
          <Box padding="xxxLarge">
            <h2 className={classNames.title}>{`Season ${parseInt(key, 10).toString()}`}</h2>
            <Box overflow="hidden">
              {episodes.map((episode) => (
                <Episode key={episode?.id} episodeRef={episode} />
              ))}
            </Box>
          </Box>
        </div>
      ))}
    </>
  );
};

export default Episodes;
