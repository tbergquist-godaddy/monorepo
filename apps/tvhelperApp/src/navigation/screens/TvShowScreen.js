// @flow strict

import * as React from 'react';
import type { NavigationScreenProp } from 'react-navigation';
import { Touchable, Text } from '@tbergq/rn-components'; // TODO: Add favorite button
import { AddFavoriteMutation, DeleteFavoriteMutation } from '@tbergq/tvhelper-xplat';
import { Environment } from '@tbergq/relay';

import TvShowScene from '../../scenes/tvShow/TvShowScene';

type Props = {|
  +navigation: NavigationScreenProp<{|
    +params: {|
      +id: string,
      +name: string,
      +isFavorite: ?boolean,
      +onToggle: ?() => void,
    |},
  |}>,
|};

const noop = () => {};

export default class TvShowScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => {
    const title: string = navigation.getParam('name') ?? '';
    const isFavorite = navigation.getParam('isFavorite');
    const onToggle = navigation.getParam('onToggle') ?? noop;
    return {
      title,
      headerRight:
        isFavorite != null ? (
          <Touchable onPress={onToggle}>
            <Text>{isFavorite ? 'Remove' : 'Add'}</Text>
          </Touchable>
        ) : null,
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ onToggle: this.toggleFavoriteMutation });
  }

  setIsFavorite = (isFavorite: ?boolean) => {
    this.props.navigation.setParams({ isFavorite });
  };

  toggleFavoriteMutation = () => {
    const environment = Environment.getEnvironment(); // TODO: Get from Relay context
    const add = !this.props.navigation.getParam('isFavorite');
    const serieId = this.props.navigation.getParam('id');
    const onCompleted = () => {
      this.setIsFavorite(add);
    };
    if (add) {
      AddFavoriteMutation(environment, { serieId }, onCompleted);
    } else {
      DeleteFavoriteMutation(environment, { serieId }, onCompleted);
    }
  };

  render() {
    const id: string | null = this.props.navigation.getParam('id') ?? null;
    if (id === null) {
      return <Text>Missing tvShow id</Text>;
    }
    return <TvShowScene id={id} setIsFavorite={this.setIsFavorite} />;
  }
}
