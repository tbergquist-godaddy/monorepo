import { Container, Box, Heading } from '@tbergq/components';
import { useLazyLoadQuery, graphql } from 'react-relay';
import { notSeenEpisodesQuery as NotSeenEpisodesQuery } from '__generated__/notSeenEpisodesQuery.graphql';

import NotSeenEpisodeList from './not-seen-episode-list';

export const notSeenEpisodesQuery = graphql`
  query notSeenEpisodesQuery {
    viewer {
      ...notSeenEpisodeList
    }
  }
`;

export default function NotSeenEpisodes(): JSX.Element {
  const data = useLazyLoadQuery<NotSeenEpisodesQuery>(
    notSeenEpisodesQuery,
    {
      options: { sortDirection: 'DESC', sortBy: 'PREVIOUS_EPISODE' },
    },
    { fetchPolicy: 'store-or-network' },
  );

  return (
    <Container>
      <Box marginTop="xxxLarge">
        <Heading>Not seen episodes</Heading>
        <Box fontSize="small" as="p" color="secondary" marginY="increased">
          This is your list of episodes from your saved favorites that you have not seen yet.
        </Box>
      </Box>
      <NotSeenEpisodeList viewer={data.viewer} />
    </Container>
  );
}
