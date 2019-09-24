// @flow strict

import * as React from 'react';
import type { NavigationScreenProp } from 'react-navigation';

import SearchScene from '../../scenes/searchScene/SearchScene';

type Props = {|
  +navigation: NavigationScreenProp<{||}>,
|};

export default class SearchScreen extends React.Component<Props> {
  static navigationOptions = () => ({
    title: 'Search',
  });

  render() {
    return <SearchScene />;
  }
}
