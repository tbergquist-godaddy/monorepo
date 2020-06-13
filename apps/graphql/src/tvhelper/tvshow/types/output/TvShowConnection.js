// @flow

import { connectionDefinitions } from '@adeira/graphql-relay';
import { type GraphQLConnectionDefinitions } from '@tbergq/graphql-services';

import TvShow from './TvShow';

const { connectionType: TvShowConnection } = (connectionDefinitions({
  nodeType: TvShow,
}): GraphQLConnectionDefinitions);

export default TvShowConnection;
