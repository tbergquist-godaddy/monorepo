import { connectionDefinitions } from '@adeira/graphql-relay';

import TvShow from './TvShow';

const { connectionType: TvShowConnection } = connectionDefinitions({
  nodeType: TvShow,
});

export default TvShowConnection;
