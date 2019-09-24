// @flow strict

import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { QueryRendererProvider } from '@tbergq/relay';
import { TOKEN_KEY } from '@tbergq/utils';
import { AsyncStorage, StatusBar, ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SearchStack from './stacks/SearchStack';
import FavoritesStack from './stacks/FavoritesStack';

MaterialIcons.loadFont();

const tabs = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialIcons color={tintColor} name="search" size={20} />,
      },
    },
    Favorites: {
      screen: FavoritesStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons color={tintColor} name="favorite" size={20} />
        ),
      },
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

type State = {|
  +token: ?string,
  +hasLoaded: boolean,
|};

export default class MainNavigator extends React.Component<{||}, State> {
  state = {
    token: null,
    hasLoaded: false,
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    this.setState({
      token,
      hasLoaded: true,
    });
  }

  render() {
    if (!this.state.hasLoaded) {
      return <ActivityIndicator />;
    }
    return (
      <QueryRendererProvider initialValue={null} token={this.state.token}>
        <StatusBar barStyle="light-content" />
        <App />
      </QueryRendererProvider>
    );
  }
}
