// @flow strict

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import OriginalReadMore from 'react-native-read-more-text';

import Text from './Text';
import Touchable from './Touchable';
import Colors from './Colors';

type Props = {|
  +numberOfLines: number,
  +children: ?React.Node,
  +truncatedText: string,
  +revealedText: string,
  +style?: $FlowFixMe,
|};

const Link = ({
  label,
  handlePress,
  style,
}: {|
  label: string,
  handlePress: () => void,
  style?: { ... },
|}) => (
  <View style={styles.linkView}>
    <Touchable onPress={handlePress}>
      <Text style={[styles.linkText, style]}>{label}</Text>
    </Touchable>
  </View>
);

export default class ReadMore extends React.Component<Props> {
  renderTruncatedFooter = (handlePress: () => void) => (
    <Link style={this.props.style} label={this.props.truncatedText} handlePress={handlePress} />
  );

  renderRevealedFooter = (handlePress: () => void) => (
    <Link style={this.props.style} label={this.props.revealedText} handlePress={handlePress} />
  );

  render() {
    return (
      <OriginalReadMore
        numberOfLines={this.props.numberOfLines}
        renderTruncatedFooter={this.renderTruncatedFooter}
        renderRevealedFooter={this.renderRevealedFooter}
      >
        {this.props.children}
      </OriginalReadMore>
    );
  }
}

const styles = StyleSheet.create({
  linkView: {
    flexDirection: 'row',
  },
  linkText: {
    color: Colors.primary,
    fontWeight: '500',
  },
});
