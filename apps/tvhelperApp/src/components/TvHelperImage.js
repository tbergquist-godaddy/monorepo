// @flow strict

import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '@tbergq/rn-components';
import { createFragmentContainer, graphql } from '@tbergq/relay';

import type { TvHelperImage_data as ImageType } from './__generated__/TvHelperImage_data.graphql';

type Props = {|
  +data: ?ImageType,
  +quality: 'original' | 'medium',
  +style?: $FlowFixMe,
|};

const TvHelperImage = (props: Props) => {
  const uri = props.quality === 'original' ? props.data?.original : props.data?.medium;
  return (
    <View style={styles.imageWrapper}>
      <Image source={{ uri }} style={props.style} />
    </View>
  );
};

TvHelperImage.defaultProps = {
  quality: 'medium',
};

const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: Colors.gray,
  },
});

export default createFragmentContainer(TvHelperImage, {
  data: graphql`
    fragment TvHelperImage_data on TvHelperImage {
      medium
      original
    }
  `,
});
