// @flow strict

import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      headerStyle: {
        backgroundColor: 'deeppink',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
});

export default MainNavigator;
