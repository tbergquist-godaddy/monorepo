import { Box } from '@tbergq/components';
import { useFragment, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import { notSeenEpisodeList$key } from '__generated__/notSeenEpisodeList.graphql';
import { invariant } from '@adeira/js';

import EpisodeListItem from './episode-list-item';

type Props = {
  viewer?: notSeenEpisodeList$key;
};
export default function NotSeenEpisodeList({ viewer }: Props): JSX.Element {
  const data = useFragment(
    graphql`
      fragment notSeenEpisodeList on TvHelperViewer {
        notSeenEpisodes(first: 1000) @connection(key: "NotSeenEpisodeList_notSeenEpisodes") {
          __id
          edges {
            node {
              id
              ...episodeListItem
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
        <EpisodeListItem
          key={node.id}
          toggleConfig={{
            markAsWatchedConfig: {
              updater: (store) => {
                const connection = store.get(data?.notSeenEpisodes?.__id);
                invariant(connection != null, 'connection should exist');

                ConnectionHandler.deleteNode(connection, node.id);
              },
            },
          }}
          includeShowName={true}
          episodeRef={node}
        />
      ))}
    </Box>
  );
}
