// @flow strict-local

import Sequelize from 'sequelize';
import { config } from 'dotenv';
import { invariant } from '@adeira/js';
import path from 'path';

config({ path: path.join(__dirname, '..', '.env') });

const { DB_URL_TJ, NODE_ENV } = process.env;
invariant(DB_URL_TJ != null, 'Expected to have DB_URL_TJ, but it was undefined');

const sequelize: Sequelize = new Sequelize(DB_URL_TJ, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: NODE_ENV === 'development',
});

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('connected');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log('failed');
  });

export default sequelize;
