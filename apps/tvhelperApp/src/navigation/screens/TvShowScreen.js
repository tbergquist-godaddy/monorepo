// @flow strict

import * as React from 'react';
import type { NavigationScreenProp } from 'react-navigation';
import { Touchable, Text, Colors } from '@tbergq/rn-components';
import { AddFavoriteMutation, DeleteFavoriteMutation } from '@tbergq/tvhelper-xplat';
import { type RelayEnvironmentType } from '@tbergq/relay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TvShowScene from '../../scenes/tvShow/TvShowScene';

type Props = {|
  +navigation: NavigationScreenProp<{|
    +params: {|
      +id: string,
      +name: string,
      +isFavorite: ?boolean,
      +onToggle: ?() => void,
      +environment: RelayEnvironmentType,
    |},
  |}>,
|};

const noop = () => {};

const parentID = 'client:root';
const connectionKey = 'FavoritesScene_favorites';
export const addConfig = [
  {
    type: 'RANGE_ADD',
    parentID,
    connectionInfo: [
      {
        key: connectionKey,
        rangeBehavior: 'append',
      },
    ],
    edgeName: 'tvShow',
  },
];

export const deleteConfig = [
  {
    type: 'RANGE_DELETE',
    parentID,
    connectionKeys: [
      {
        key: connectionKey,
      },
    ],
    pathToConnection: [parentID, 'favorites'],
    deletedIDFieldName: 'id',
  },
];

export default class TvShowScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => {
    const title: string = navigation.getParam('name') ?? '';
    const isFavorite = navigation.getParam('isFavorite');
    const onToggle = navigation.getParam('onToggle') ?? noop;

    return {
      title,
      headerRight:
        isFavorite == null ? null : (
          <Touchable onPress={onToggle} style={{ padding: 10 }}>
            <MaterialIcons
              name={isFavorite ? 'favorite' : 'favorite-border'}
              size={20}
              color={Colors.danger}
            />
          </Touchable>
        ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ onToggle: this.toggleFavoriteMutation });
  }

  setIsFavorite = (isFavorite: ?boolean) => {
    this.props.navigation.setParams({ isFavorite });
  };

  toggleFavoriteMutation = () => {
    const environment = this.props.navigation.getParam('environment');
    if (environment == null) {
      throw new Error('Expected to have relay environment, but did not');
    }
    const add = !this.props.navigation.getParam('isFavorite');
    const serieId = this.props.navigation.getParam('id');
    const onCompleted = () => {
      this.setIsFavorite(add);
    };
    if (add) {
      AddFavoriteMutation(environment, { serieId }, onCompleted, addConfig);
    } else {
      DeleteFavoriteMutation(environment, { serieId }, onCompleted, deleteConfig);
    }
  };

  render() {
    const id = this.props.navigation.getParam('id') ?? null;
    if (id === null) {
      return <Text testID="TvShowScreenError">Missing tvShow id</Text>;
    }
    return <TvShowScene id={id} setIsFavorite={this.setIsFavorite} />;
  }
}
