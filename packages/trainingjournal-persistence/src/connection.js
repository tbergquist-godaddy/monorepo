// @flow strict-local

import Sequelize from 'sequelize';
import { config } from 'dotenv';
import { invariant } from '@adeira/js';
import path from 'path';

config({ path: path.join(__dirname, '..', '.env') });

const { DB_URL_TJ, NODE_ENV, CLEARDB_DATABASE_URL } = process.env;
const dbUrl = DB_URL_TJ ?? CLEARDB_DATABASE_URL;
invariant(dbUrl != null, 'Expected to have DB_URL_TJ, but it was undefined');

const sequelize: Sequelize = new Sequelize(dbUrl, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: NODE_ENV === 'development',
});

export default sequelize;
