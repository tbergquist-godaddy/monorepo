// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Colors } from '@tbergq/rn-components';

import type { CastItem_data as CastType } from './__generated__/CastItem_data.graphql';

type Props = {|
  +data: ?CastType,
|};

const CastItem = (props: Props) => {
  const imageUrl = props.data?.person?.image?.medium ?? props.data?.character?.image?.medium;
  const actorName = props.data?.person?.name ?? '';
  const characterName = props.data?.character?.name ?? '';
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <Text>{`Actor: ${actorName}`}</Text>
      <Text>{`Character: ${characterName}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginEnd: 10,
    width: 100,
  },
  image: {
    height: 100,
    width: 100,
  },
  imageWrapper: {
    backgroundColor: Colors.gray,
  },
});

// eslint-disable-next-line no-unused-vars
const CastItemPersonFragment = graphql`
  fragment CastItemPerson_person on Person @relay(mask: false) {
    name
    image {
      medium
    }
  }
`;

export default createFragmentContainer(CastItem, {
  data: graphql`
    fragment CastItem_data on Cast {
      person {
        ...CastItemPerson_person @relay(mask: false)
      }
      character {
        ...CastItemPerson_person @relay(mask: false)
      }
    }
  `,
});
