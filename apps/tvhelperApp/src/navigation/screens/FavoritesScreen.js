// @flow strict

import * as React from 'react';
import { TOKEN_KEY } from '@tbergq/utils';
import { AsyncStorage, StyleSheet } from 'react-native';
import type { NavigationScreenProp } from 'react-navigation';
import { Touchable, Text, Colors } from '@tbergq/rn-components';

import LoginScene from '../../scenes/login/LoginScene';
import FavoritesScene from '../../scenes/favorites/FavoritesScene';
import isLoggedIn from './isLoggedIn';
import SortPicker from '../../components/sortPicker/SortPicker';

type Props = {|
  +navigation: NavigationScreenProp<{|
    +params: {|
      +isLoggedIn: boolean,
      +logout: () => Promise<void>,
      +toggleModal: ?() => void,
    |},
  |}>,
|};

type State = {|
  isLoggedIn: boolean,
  showModal: boolean,
  direction: 'ASC' | 'DESC',
  sortBy: 'NAME' | 'NEXT_EPISODE' | 'PREVIOUS_EPISODE' | 'STATUS',
|};

const noop = () => {};

export default class FavoritesScreen extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: Props) => {
    const isLoggedIn = navigation.getParam('isLoggedIn') ?? false; // navigation.state.params?.isLoggedIn ?? false;
    const logout = navigation.getParam('logout') ?? noop;
    const toggleModal = navigation.getParam('toggleModal') ?? noop;
    return {
      title: 'Favorites',
      headerRight: isLoggedIn ? (
        <Touchable onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </Touchable>
      ) : null,
      headerLeft: isLoggedIn && (
        <Touchable onPress={toggleModal}>
          <Text style={styles.logoutText}>Sort</Text>
        </Touchable>
      ),
    };
  };

  state = {
    isLoggedIn: false,
    showModal: false,
    direction: 'ASC',
    sortBy: 'NAME',
  };

  async componentDidMount() {
    this.props.navigation.setParams({ isLoggedIn: false, logout: this.logout });
    const loggedIn = await isLoggedIn();
    if (loggedIn) {
      this.setState({ isLoggedIn: true });
      this.props.navigation.setParams({
        isLoggedIn: true,
        toggleModal: this.toggleModal,
      });
    }
  }

  onLogin = async (token: string) => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
    this.setState({ isLoggedIn: true });
    this.props.navigation.setParams({ isLoggedIn: true });
  };

  logout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
    this.setState({ isLoggedIn: false });
    this.props.navigation.setParams({ isLoggedIn: false });
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  setSortOptions = (
    direction: $PropertyType<State, 'direction'>,
    sortBy: $PropertyType<State, 'sortBy'>,
  ) => {
    this.setState({ direction, sortBy, showModal: false });
  };

  render() {
    if (this.state.isLoggedIn === false) {
      return <LoginScene onLogin={this.onLogin} />;
    }
    const { direction, sortBy } = this.state;
    return (
      <>
        <FavoritesScene
          options={{
            sortDirection: direction,
            sortBy,
          }}
        />
        <SortPicker
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          setSortOptions={this.setSortOptions}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  logoutText: {
    color: Colors.white,
    padding: 10,
    fontWeight: '500',
  },
});
