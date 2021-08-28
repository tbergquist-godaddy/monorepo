import { Box } from '@tbergq/components';
import { useFragment, graphql } from 'react-relay';
import { notSeenEpisodeList$key } from '__generated__/notSeenEpisodeList.graphql';

type Props = {
  viewer?: notSeenEpisodeList$key;
};
export default function NotSeenEpisodeList({ viewer }: Props): JSX.Element {
  const data = useFragment(
    graphql`
      fragment notSeenEpisodeList on TvHelperViewer {
        notSeenEpisodes {
          edges {
            node {
              id
              name
              airdate
              seasonAndNumber
              tvShow {
                name
              }
            }
          }
        }
      }
    `,
    viewer,
  );
  const edges = data?.notSeenEpisodes?.edges ?? [];
  // TODO: Improve styling
  return (
    <Box overflow="hidden">
      {edges.map(({ node }) => (
        <Box
          key={node.id}
          padding="large"
          borderBottomWidth="normal"
          borderBottomStyle="solid"
          borderColor="gray"
          marginBottom="listHide"
          marginTop="listAdjust"
        >
          {node.seasonAndNumber} - {node.name} -{' '}
          <Box as="span" fontWeight={500}>
            {node.tvShow.name}
          </Box>{' '}
          - {node.airdate}
        </Box>
      ))}
    </Box>
  );
}
