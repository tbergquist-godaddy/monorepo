// @flow strict

import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
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
