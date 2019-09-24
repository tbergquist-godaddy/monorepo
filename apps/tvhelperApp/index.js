// @flow

/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';

import App from './src/navigation';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Warning: componentWillMount', '[RCTRootView']);

AppRegistry.registerComponent(appName, () => App);
