import path from 'path';
import { monorepoBuilder } from '@tbergq/monorepo-builder';
import { ShellCommand } from '@adeira/monorepo-utils';
import fs from 'fs';
import rimraf from 'rimraf';
import util from 'util';
import os from 'os';

const rimrafPromise = util.promisify(rimraf);

const buildDir = path.join(os.tmpdir(), 'graphql');

const log = (...args: ReadonlyArray<unknown>) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};

const thisWorkspace = '@tbergq/graphql';
const { ZEIT_TOKEN } = process.env;

if (ZEIT_TOKEN == null) {
  throw new Error('ZEIT_TOKEN cannot be undefined');
}
(async () => {
  try {
    await rimrafPromise(buildDir);
    await monorepoBuilder(thisWorkspace, buildDir, { removeRootDependencies: false });
    fs.copyFileSync(path.join(__dirname, '..', 'now.json'), path.join(buildDir, 'now.json'));
    const packageJson = require(path.join(buildDir, 'apps', 'graphql', 'package.json'));

    fs.writeFileSync(
      path.join(buildDir, 'apps', 'graphql', 'package.json'),
      JSON.stringify(packageJson, null, 2),
    );
    log('built to', buildDir);
    new ShellCommand(buildDir, 'now', '--prod', '--confirm', `--token=${ZEIT_TOKEN}`)
      .setOutputToScreen()
      .runSynchronously();
  } catch (e) {
    log(e);
    process.exit(-1);
  }
})();
