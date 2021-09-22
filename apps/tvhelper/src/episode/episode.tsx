import ImageSummary from 'components/image-summary';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { episodeQuery as EpisodeQuery } from '__generated__/episodeQuery.graphql';
import { Container, Heading, Box } from '@tbergq/components';

export const episodeQuery = graphql`
  query episodeQuery($id: ID!) {
    episode(id: $id) {
      name
      summary
      seasonAndNumber
      image {
        medium
      }
    }
  }
`;

type Props = {
  episodeId: string;
};

export default function Episode({ episodeId }: Readonly<Props>): JSX.Element {
  const data = useLazyLoadQuery<EpisodeQuery>(
    episodeQuery,
    { id: episodeId },
    { fetchPolicy: 'store-or-network' },
  );

  return (
    <Container>
      <Box paddingY="normal">
        <Heading>
          {data?.episode?.seasonAndNumber} - {data?.episode?.name}
        </Heading>
      </Box>
      <ImageSummary url={data?.episode?.image?.medium} summary={data?.episode?.summary} />
    </Container>
  );
}
