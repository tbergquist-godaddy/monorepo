// @flow

import path from 'path';
import { monorepoBuilder } from '@tbergq/monorepo-builder';
import { ShellCommand, getTouchedWorkspaces, findMonorepoRoot } from '@adeira/monorepo-utils';
import fs from 'fs';
import rimraf from 'rimraf';
import util from 'util';
import os from 'os';

import packageJson from '../package.json';

const rimrafPromise = util.promisify(rimraf);

const buildDir = path.join(os.tmpdir(), 'trainingjournal');

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
      path.join(findMonorepoRoot(), '.dockerignore'),
      path.join(buildDir, '.dockerignore'),
    );

    log('built to', buildDir);

    new ShellCommand(buildDir, 'yarn', 'workspace', '@tbergq/trainingjournal', 'build')
      .setOutputToScreen()
      .runSynchronously();
    new ShellCommand(buildDir, 'heroku', 'container:login').setOutputToScreen().runSynchronously();
    new ShellCommand(buildDir, 'heroku', 'container:push', 'web', '-a', 'tbergq-tj')
      .setOutputToScreen()
      .runSynchronously();
    new ShellCommand(buildDir, 'heroku', 'container:release', 'web', '-a', 'tbergq-tj')
      .setOutputToScreen()
      .runSynchronously();
  } catch (e) {
    log(e);
    process.exit(-1);
  }
})();
