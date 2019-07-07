// @flow strict

import { createStackNavigator } from 'react-navigation';

import LoginStack from './LoginStack';
import LoggedInStack from './LoggedInStack';

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginStack,
    },
    LoggedInStack: {
      screen: LoggedInStack,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    headerMode: 'none',
  },
);

export default MainNavigator;
