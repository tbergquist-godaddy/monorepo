// @flow

import path from 'path';
import testBC from '@kiwicom/graphql-bc-checker';

import Schema from '../src/Schema';

testBC({
  allowBreakingChanges: false,
  snapshotLocation: path.join(__dirname, '..', '..', '..', 'schema.graphql'),
  schema: Schema,
});
