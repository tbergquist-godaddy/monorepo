// @flow

const fs = require('fs');
const path = require('path');
const { Workspaces } = require('@kiwicom/monorepo-utils');

const TESTS_GLOB = '__tests__/**/?(*.)+(spec|test).js';
global.__DEV__ = true;

const commonProjectConfig = {
  globals: {
    __DEV__: true,
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  timers: 'fake',
};

function tryToLoadWorkspaceConfig(configPath /*: string */) /*: Object */ {
  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line no-console
    console.warn(
      'Loaded additional config %s',
      configPath.replace(__dirname, ''),
    );
    // $FlowExpectedError: This is a valid string, but flow does not recognise it
    return require(configPath);
  }
  return {};
}

module.exports = {
  rootDir: __dirname,
  verbose: false,
  projects: [
    ...Workspaces.getWorkspacesSync().map(packageJSONLocation => {
      // $FlowExpectedError: This is a valid string, but flow does not recognise it
      const packageJSON = require(packageJSONLocation);
      const workspaceDirname = path.dirname(packageJSONLocation);
      return {
        displayName: packageJSON.name,
        rootDir: workspaceDirname,
        testMatch: [`**/${TESTS_GLOB}`],
        ...commonProjectConfig,
        ...tryToLoadWorkspaceConfig(
          path.join(workspaceDirname, 'jest.config.js'),
        ),
      };
    }),
  ],
};
