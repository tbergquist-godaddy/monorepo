import { useLazyLoadQuery, graphql } from 'react-relay';
import { episodeContainerQuery as EpisodeQuery } from '__generated__/episodeContainerQuery.graphql';
import { Container } from '@tbergq/components';

import Episode from './components/episode';
import useEpisode from './models/use-episode';

type Props = {
  episodeId: string;
};

export const episodeQuery = graphql`
  query episodeContainerQuery($id: ID!) {
    episode(id: $id) {
      id
      watched
      ...episode
    }
  }
`;

export default function EpisodeContainer({ episodeId }: Readonly<Props>): JSX.Element {
  const data = useLazyLoadQuery<EpisodeQuery>(
    episodeQuery,
    { id: episodeId },
    { fetchPolicy: 'store-or-network' },
  );
  const {
    models: { isMutating },
    operations: { toggleEpisodeWatched },
  } = useEpisode({ episodeId: data?.episode?.id, watched: data?.episode?.watched });
  return (
    <Container>
      <Episode
        isMutating={isMutating}
        actions={{
          toggleEpisodeWatched,
        }}
        episodeRef={data?.episode}
      />
    </Container>
  );
}
