// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { ScrollView } from 'react-native';

import type { Cast_data as CastType } from './__generated__/Cast_data.graphql';
import CastItem from './CastItem';

type Props = {|
  +data: ?CastType,
|};

const Cast = (props: Props) => {
  const data = props.data?.cast ?? [];
  return (
    <ScrollView horizontal={true}>
      {data.map(cast => (
        <CastItem key={cast?.id} data={cast} />
      ))}
    </ScrollView>
  );
};
export default createFragmentContainer(Cast, {
  data: graphql`
    fragment Cast_data on TvShow {
      cast {
        id
        ...CastItem_data
      }
    }
  `,
});
