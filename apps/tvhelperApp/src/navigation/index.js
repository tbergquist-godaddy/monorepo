// @flow strict

import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { QueryRendererProvider } from '@tbergq/relay';
import { TOKEN_KEY } from '@tbergq/utils';
import { AsyncStorage, StatusBar } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

import SearchStack from './stacks/SearchStack';
import FavoritesStack from './stacks/FavoritesStack';

let token;

AsyncStorage.getItem(TOKEN_KEY).then(storedToken => {
  token = storedToken; // TODO: Improve this
});

const tabs = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStack,
      // navigationOptions: {
      //   tabBarIcon: ({ tintColor }) => (
      //     <MaterialIcons color={tintColor} name="search" size={20} />
      //   ),
      // },
    },
    Favorites: {
      screen: FavoritesStack,
      // navigationOptions: {
      //   tabBarIcon: ({ tintColor }) => (
      //     <MaterialIcons color={tintColor} name="favorite" size={20} />
      //   ),
      // },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#222',
      },
      activeTintColor: '#337ab7',
    },
  },
);

const App = createAppContainer(tabs);

export default function MainNavigator() {
  return (
    <QueryRendererProvider initialValue={null} token={token}>
      <StatusBar barStyle="light-content" />
      <App />
    </QueryRendererProvider>
  );
}
