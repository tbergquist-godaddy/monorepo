// @flow

import path from 'path';
import { monorepoBuilder } from '@tbergq/monorepo-builder';
import { ShellCommand, getTouchedWorkspaces } from '@adeira/monorepo-utils';
import fs from 'fs';
import rimraf from 'rimraf';
import util from 'util';
import os from 'os';

import packageJson from '../package.json';

const rimrafPromise = util.promisify(rimraf);

const buildDir = path.join(os.tmpdir(), 'tvhelper');

const log = (...args: $ReadOnlyArray<string>) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};

const thisWorkspace = packageJson.name;

(async () => {
  try {
    const touchedWorkapaces = getTouchedWorkspaces();
    const workspaces = Array.from(touchedWorkapaces);

    if (!workspaces.includes(thisWorkspace)) {
      log('no changes, skipping deploy.');
      process.exit(0);
    }
    await rimrafPromise(buildDir);
    await monorepoBuilder(thisWorkspace, buildDir, {
      transpile: false,
      removeRootDependencies: false,
    });
    fs.copyFileSync(path.join(__dirname, '..', 'Dockerfile'), path.join(buildDir, 'Dockerfile'));
    fs.copyFileSync(
      path.join(__dirname, '..', 'docker-compose.yml'),
      path.join(buildDir, 'docker-compose.yml'),
    );
    fs.copyFileSync(
      path.join(__dirname, '..', '.babelrc.js'),
      path.join(buildDir, 'apps', 'tvhelper', '.babelrc.js'),
    );
    fs.copyFileSync(
      path.join(__dirname, '..', '..', '..', 'schema.graphql'),
      path.join(buildDir, 'schema.graphql'),
    );
    fs.copyFileSync(
      path.join(__dirname, '..', '..', '..', 'relay.config.js'),
      path.join(buildDir, 'relay.config.js'),
    );
    fs.copyFileSync(
      path.join(__dirname, '..', '..', '..', '.dockerignore'),
      path.join(buildDir, '.dockerignore'),
    );

    log('built to', buildDir);

    new ShellCommand(buildDir, 'docker-compose', 'build').setOutputToScreen().runSynchronously();
    new ShellCommand(
      buildDir,
      'docker',
      'tag',
      'tbergq/tvhelper',
      'registry.heroku.com/tbergq-tvhelper/web',
    )
      .setOutputToScreen()
      .runSynchronously();
    new ShellCommand(buildDir, 'docker', 'push', 'registry.heroku.com/tbergq-tvhelper/web')
      .setOutputToScreen()
      .runSynchronously();
    new ShellCommand(buildDir, 'heroku', 'container:release', 'web', '-a', 'tbergq-tvhelper')
      .setOutputToScreen()
      .runSynchronously();
  } catch (e) {
    log(e);
    process.exit(-1);
  }
})();
