// @flow strict

import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from '../screens/SearchScreen';
import defaultOptions from './NavigationOptions';
import SharedScreens from './SharedScreens';

export default createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    ...SharedScreens,
  },
  {
    initialRouteName: 'Search',
    ...defaultOptions,
  },
);
