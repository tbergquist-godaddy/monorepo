// @flow

import path from 'path';
import fs from 'fs';

const root = path.join(__dirname, '..', '..', '..');
const nativeModulesGradlePath = path.join(
  root,
  'node_modules',
  '@react-native-community',
  'cli-platform-android',
  'native_modules.gradle',
);

const fileContent = fs.readFileSync(nativeModulesGradlePath, 'utf-8');

// Latest version of rn-cli tries to fetch the config from the project root, which in our case will not work
// We need to patch it to fetch it from workspace. I will open an issue with the rn-cli to see if they can provide
// some way of configuring this in the future.
// see https://github.com/react-native-community/cli/issues/468#issuecomment-525210128
fs.writeFileSync(
  nativeModulesGradlePath,
  fileContent.replace(
    'node ./node_modules/react-native/cli.js config',
    './node_modules/.bin/react-native config',
  ),
);
