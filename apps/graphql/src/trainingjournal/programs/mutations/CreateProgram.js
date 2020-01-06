// @flow

import { GraphQLNonNull } from 'graphql';
import { ProgramRepository } from '@tbergq/trainingjournal-persistence';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import CreateProgramInput, { type CreateProgramInputType } from '../types/input/CreateProgramInput';
import CreateProgramOutput from '../types/output/CreateProgram';

type Args = {
  program: CreateProgramInputType,
  ...
};

export default {
  description: 'Create a new program',
  type: CreateProgramOutput,
  args: {
    program: {
      type: GraphQLNonNull(CreateProgramInput),
    },
  },
  resolve: async (_: mixed, { program }: Args, { user }: GraphqlContextType) => {
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
