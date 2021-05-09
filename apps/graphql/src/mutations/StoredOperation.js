// @flow

import { GraphQLNonNull, GraphQLList, GraphQLInputObjectType } from 'graphql';
import { StoredOperationRepository } from '@tbergq/graphql-persistence';

import CreatedStoredOperation from '../types/output/StoredOperationMutation';
import StoredOperationInput from '../types/input/StoredOperationInput';

type StoredOperationType = {
  +operationId: string,
  +text: string,
};

type Args = {
  storedOperations: $ReadOnlyArray<StoredOperationType>,
  ...
};

export default {
  type: CreatedStoredOperation,
  args: {
    storedOperations: {
      type: (GraphQLNonNull(GraphQLList(GraphQLNonNull(StoredOperationInput))): GraphQLNonNull<
        GraphQLList<GraphQLNonNull<GraphQLInputObjectType>>,
      >),
    },
  },
  resolve: async (_: mixed, args: Args): Promise<{ createdOperations: any }> => {
    const addedOperations = await StoredOperationRepository.addOperations(args.storedOperations);

    return {
      createdOperations: addedOperations ?? [],
    };
  },
};
