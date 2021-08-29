import { Box } from '@tbergq/components';
import { useFragment, graphql } from 'react-relay';
import { notSeenEpisodeList$key } from '__generated__/notSeenEpisodeList.graphql';

import NotSeenEpisodeListItem from './not-seen-episode-list-item';

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
              ...notSeenEpisodeListItem
            }
          }
        }
      }
    `,
    viewer,
  );
  const edges = data?.notSeenEpisodes?.edges ?? [];

  return (
    <Box overflow="hidden">
      {edges.map(({ node }) => (
        <NotSeenEpisodeListItem key={node.id} episode={node} />
      ))}
    </Box>
  );
}
