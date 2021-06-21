import path from 'path';
import testBC from '@adeira/graphql-bc-checker';

import Schema from '../src/Schema';

const allowBreakingChanges = process.argv.includes('--allow-bc');

testBC({
  allowBreakingChanges,
  snapshotLocation: path.join(__dirname, '..', 'schema.graphql'),
  schema: Schema,
});
