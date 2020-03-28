// @flow

import { GraphQLNonNull, GraphQLInputObjectType } from 'graphql';
import { ProgramRepository, type Program } from '@tbergq/trainingjournal-persistence';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import CreateProgramInput, { type CreateProgramInputType } from '../types/input/CreateProgramInput';
import CreateProgramOutput from '../types/output/CreateProgram';

type Args = {
  program: CreateProgramInputType,
  ...
};

type Resolver = {
  +programEdge: {
    +node: Program,
  },
};

export default {
  description: 'Create a new program',
  type: CreateProgramOutput,
  args: {
    program: {
      type: (GraphQLNonNull(CreateProgramInput): GraphQLNonNull<GraphQLInputObjectType>),
    },
  },
  resolve: async (
    _: mixed,
    { program }: Args,
    { user }: GraphqlContextType,
  ): Promise<null | Resolver> => {
    const userId = user?.id;
    if (userId == null) {
      return null;
    }
    const node = await ProgramRepository.createProgram({
      ...program,
      user: userId,
    });
    return {
      programEdge: {
        node,
      },
    };
  },
};
