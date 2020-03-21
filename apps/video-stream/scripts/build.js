// @flow

import path from 'path';
import os from 'os';
import { ShellCommand, findMonorepoRoot } from '@adeira/monorepo-utils';
import rimraf from 'rimraf';
import fs from 'fs';

import packageJson from '../package.json';

const buildDir = path.join(os.tmpdir(), 'videostream');
const localBuildDir = path.join(__dirname, '..', '.build');

rimraf.sync(localBuildDir);
rimraf.sync(buildDir);
fs.mkdirSync(buildDir);
new ShellCommand(null, 'yarn', 'build:renderer').setOutputToScreen().runSynchronously();
new ShellCommand(null, 'yarn', 'build:main').setOutputToScreen().runSynchronously();
new ShellCommand(null, 'cp', '-r', localBuildDir, path.join(buildDir, '.build'))
  .setOutputToScreen()
  .runSynchronously();

// $FlowAllowDynamicImport
const rootPackage = require(path.join(findMonorepoRoot(), 'package.json'));

packageJson.dependencies = {
  ...rootPackage.dependencies,
  ...packageJson.dependencies,
  ...rootPackage.devDependencies,
  ...packageJson.devDependencies,
};

packageJson.devDependencies = {
  electron: packageJson.dependencies.electron,
  'electron-builder': packageJson.devDependencies['electron-builder'],
};

delete packageJson.dependencies.electron;
delete packageJson.dependencies['electron-builder'];

packageJson.name = 'videostream';

fs.writeFileSync(path.join(buildDir, 'package.json'), JSON.stringify(packageJson, null, 2));

new ShellCommand(buildDir, 'yarn', 'install').setOutputToScreen().runSynchronously();
new ShellCommand(buildDir, 'yarn', 'build:electron').setOutputToScreen().runSynchronously();
