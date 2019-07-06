// @flow strict

import {
  createStackNavigator,
  createAppContainer,
  type NavigationState,
  type NavigationContainer,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

type NavigationOptions = { ... };
type NavigationProps = { ... };

const AppContainer: NavigationContainer<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createAppContainer(AppNavigator);

export default AppContainer;
