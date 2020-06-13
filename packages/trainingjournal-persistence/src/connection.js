// @flow strict-local

import Sequelize from 'sequelize';
import { config } from 'dotenv';
import { invariant } from '@adeira/js';

config();

const { DB_URL } = process.env;

invariant(DB_URL != null, 'Expected to have DB_URL, but it was undefined');

const sequelize: Sequelize = new Sequelize(DB_URL, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
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
