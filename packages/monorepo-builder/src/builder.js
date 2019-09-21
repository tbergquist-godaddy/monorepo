// @flow

import { ShellCommand, globSync, findMonorepoRoot } from '@kiwicom/monorepo-utils';
import path from 'path';
import fs from 'fs';
import { transformFileSync } from '@babel/core';
import rimraf from 'rimraf';
import util from 'util';

import findRelatedWorkspaces from './findRelatedWorkspaceLocations';

const globIgnore = ['**/node_modules/**', '**/__tests__/**', '**/__mocks__/**'];

const rimrafPromise = util.promisify(rimraf);
function copyFileSync(absoluteFrom, absoluteTo) {
  fs.mkdirSync(path.dirname(absoluteTo), { recursive: true });
  fs.copyFileSync(absoluteFrom, absoluteTo);
}

function copyAndTranspileFileSync(absoluteFrom, absoluteTo, babelConfig) {
  fs.mkdirSync(path.dirname(absoluteTo), { recursive: true });
  fs.writeFileSync(absoluteTo, transformFileSync(absoluteFrom, babelConfig).code);
}

type Config = {|
  +removeRootDependencies: boolean,
  +transpile: boolean,
|};

const defaultConfig = {
  removeRootDependencies: true,
  transpile: true,
};

export default async function build(
  rootWorkspace: string,
  buildDir: string,
  config: $Shape<Config> = {},
) {
  const buildConfig = {
    ...defaultConfig,
    ...config,
  };
  await rimrafPromise(buildDir);
  const workspacesInfo = new ShellCommand(null, 'yarn', 'workspaces', 'info')
    .runSynchronously()
    .getStdout();
  const workspaces = JSON.parse(workspacesInfo);
  const repoRoot = findMonorepoRoot();
  const locations = findRelatedWorkspaces(workspaces, rootWorkspace);

  const projectRoots = Array.from(locations).map(location => path.join(repoRoot, location));

  for (const projectRoot of projectRoots) {
    const rawFileNames = globSync('/**/*.*', {
      root: projectRoot,
      ignore: globIgnore,
    });
    for (const rawFileName of rawFileNames) {
      const destinationFilename = path.join(buildDir, rawFileName.replace(repoRoot, ''));
      if (rawFileName.endsWith('.js') && buildConfig.transpile) {
        copyAndTranspileFileSync(rawFileName, destinationFilename, {
          cwd: projectRoot,
          rootMode: 'upward',
        });
      } else {
        copyFileSync(rawFileName, destinationFilename);
      }
    }
  }
  // $FlowAllowDynamicImport
  const packageJSON = require(path.join(repoRoot, 'package.json'), 'utf8');
  fs.writeFileSync(
    path.join(buildDir, 'package.json'),
    JSON.stringify(
      {
        ...packageJSON,
        ...(buildConfig.removeRootDependencies ? { dependencies: {}, devDependencies: {} } : {}),
      },
      null,
      2,
    ),
  );
  copyFileSync(path.join(repoRoot, 'yarn.lock'), path.join(buildDir, 'yarn.lock'));

  new ShellCommand(buildDir, 'yarn', 'install').setOutputToScreen().runSynchronously();
}
