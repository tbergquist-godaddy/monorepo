// @flow strict

import {
  createAppContainer,
  type NavigationState,
  type NavigationContainer,
} from 'react-navigation';

import MainStack from './MainStack';

type NavigationOptions = {||};
type NavigationProps = { ... };

const AppContainer: NavigationContainer<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createAppContainer(MainStack);

export default AppContainer;
