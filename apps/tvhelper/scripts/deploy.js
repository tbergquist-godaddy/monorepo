// @flow

import path from 'path';
import { monorepoBuilder } from '@tbergq/monorepo-builder';
import { ShellCommand, getTouchedWorkspaces } from '@adeira/monorepo-utils';
import fs from 'fs';
import rimraf from 'rimraf';
import util from 'util';
import os from 'os';

const rimrafPromise = util.promisify(rimraf);

const buildDir = path.join(os.tmpdir(), 'tvhelper');

const log = (...args: $ReadOnlyArray<string>) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};

const thisWorkspace = '@tbergq/tvhelper';
const { ZEIT_TOKEN } = process.env;

if (ZEIT_TOKEN == null) {
  throw new Error('ZEIT_TOKEN cannot be undefined');
}
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
    fs.copyFileSync(path.join(__dirname, '..', 'now.json'), path.join(buildDir, 'now.json'));
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
    // $FlowAllowDynamicImport
    const packageJson = require(path.join(buildDir, 'apps', 'tvhelper', 'package.json'));
    packageJson.engines = { node: '10.x' };
    fs.writeFileSync(
      path.join(buildDir, 'apps', 'tvhelper', 'package.json'),
      JSON.stringify(packageJson, null, 2),
    );
    log('built to', buildDir);
    new ShellCommand(buildDir, 'now', '--prod', `--token=${ZEIT_TOKEN}`)
      .setOutputToScreen()
      .runSynchronously();
  } catch (e) {
    log(e);
    process.exit(-1);
  }
})();
