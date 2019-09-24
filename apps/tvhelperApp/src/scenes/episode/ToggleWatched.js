// @flow strict

import * as React from 'react';
import { Button } from '@tbergq/rn-components';
import { createFragmentContainer, graphql, type RelayProp } from '@tbergq/relay';
import { StyleSheet } from 'react-native';

import type { ToggleWatched_data as ToggleWatchedType } from './__generated__/ToggleWatched_data.graphql';
import markAsWatchedMutation from './mutation/markAsWatchedEpisodeMutation';
import deleteAsWatchedMutation from './mutation/unmarkAsWatchedEpisode';

type Props = {|
  +data: ?ToggleWatchedType,
  +relay: RelayProp,
|};

class ToggleWatched extends React.Component<Props> {
  onPress = () => {
    const episodeId = this.props.data?.id;

    if (episodeId == null) {
      return;
    }

    if (this.props.data?.watched === false) {
      markAsWatchedMutation(this.props.relay.environment, {
        episodeId,
      });
    } else {
      deleteAsWatchedMutation(this.props.relay.environment, {
        episodeId,
      });
    }
  };

  render() {
    const text = this.props.data?.watched === true ? 'Mark as not watched' : 'Mark as watched';
    const type = this.props.data?.watched === true ? 'danger' : 'primary';
    return <Button style={styles.button} type={type} text={text} onPress={this.onPress} />;
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 0,
  },
});

export default createFragmentContainer(ToggleWatched, {
  data: graphql`
    fragment ToggleWatched_data on Episode {
      id
      watched
    }
  `,
});
