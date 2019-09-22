// @flow

import fs from 'fs';
import path from 'path';
import { lexicographicSortSchema, printSchema } from 'graphql';

import Schema from '../src/Schema';

const clientSchema = printSchema(lexicographicSortSchema(Schema));
fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'schema.graphql'), clientSchema);
