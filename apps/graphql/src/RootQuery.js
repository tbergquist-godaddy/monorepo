// @flow

import { GraphQLObjectType } from 'graphql';
import { TvhelperQueries } from '@tbergq/graphql-tvhelper';

const queryObjects = [TvhelperQueries];

function generateQueries() {
  return queryObjects.reduce((acc, curr) => {
    Object.keys(curr).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(acc, key)) {
        throw new Error(`Duplicated field ${key}.`);
      }
    });
    return {
      ...acc,
      ...curr,
    };
  }, {});
}
export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: generateQueries(),
});
