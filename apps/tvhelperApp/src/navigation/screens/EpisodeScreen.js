// @flow strict

import * as React from 'react';
import type { NavigationScreenProp } from 'react-navigation';
import { Text } from '@tbergq/rn-components';

import EpisodeScene from '../../scenes/episode/EpisodeScene';

type Props = {|
  +navigation: NavigationScreenProp<{|
    +params: {|
      +id: string,
      +seasonAndNumber: string,
    |},
  |}>,
|};

export default class EpisodeScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => ({
    title: navigation.getParam('seasonAndNumber'),
  });

  render() {
    const id = this.props.navigation.getParam('id');

    if (id == null) {
      return <Text>Missing episode id</Text>;
    }

    return <EpisodeScene id={id} />;
  }
}
