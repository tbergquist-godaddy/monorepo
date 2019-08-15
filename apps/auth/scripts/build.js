// @flow

import path from 'path';
import { monorepoBuilder } from '@tbergq/monorepo-builder';
import fs from 'fs';
import rimraf from 'rimraf';
import util from 'util';
import os from 'os';

const rimrafPromise = util.promisify(rimraf);

const buildDir = path.join(os.tmpdir(), 'authservice');

const log = (...args: $ReadOnlyArray<string>) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};
(async () => {
  await rimrafPromise(buildDir);
  await monorepoBuilder('@tbergq/auth', buildDir);
  fs.copyFileSync(path.join(__dirname, '..', 'Dockerfile'), path.join(buildDir, 'Dockerfile'));
  fs.copyFileSync(path.join(__dirname, '..', '.env'), path.join(buildDir, '.env'));
  log('built to', buildDir);
})();
