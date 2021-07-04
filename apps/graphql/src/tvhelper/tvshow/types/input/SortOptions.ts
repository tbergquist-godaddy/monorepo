import { GraphQLInputObjectType, GraphQLEnumType } from 'graphql';

const SortDirection = new GraphQLEnumType({
  name: 'SortDirection',
  values: {
    ASC: { value: 'ascending' },
    DESC: { value: 'descending' },
  },
});

const SortBy = new GraphQLEnumType({
  name: 'SortBy',
  values: {
    NAME: { value: 'name' },
    NEXT_EPISODE: { value: 'nextEpisode' },
    PREVIOUS_EPISODE: { value: 'previousEpisode' },
    STATUS: { value: 'status' },
  },
});

export default new GraphQLInputObjectType({
  name: 'SortOptions',
  description: 'Options of how to sort series by',
  fields: {
    sortDirection: {
      type: SortDirection,
      defaultValue: 'ascending',
    },
    sortBy: {
      type: SortBy,
      defaultValue: 'name',
    },
  },
});
