import { connectionDefinitions } from '@adeira/graphql-relay';

import Episode from './Episode';

const { connectionType: EpisodeConnection } = connectionDefinitions({
  nodeType: Episode,
});

export default EpisodeConnection;
