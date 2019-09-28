// @flow

import * as React from 'react';
import { unwrapContainer, createMockEnvironment } from 'relay-test-utils';
import { create } from 'react-test-renderer';

import TvShowItemFragment from '../TvShowItem';

const TvShowItem = unwrapContainer(TvShowItemFragment);

const props = {
  data: {
    id: '123',
    name: 'the 123',
    status: 'running',
    rating: 8,
    image: {
      medium: 'http://lol.no',
    },
  },
  relay: { environment: createMockEnvironment() },
};
it('calls onPress correctly', () => {
  const onPress = jest.fn();
  const wrapper = create(<TvShowItem {...props} onPress={onPress} />);
  const button = wrapper.root.findByProps({ testID: 'TouchableOpacity' });
  button.props.onPress();

  expect(onPress).toHaveBeenCalledWith({
    environment: props.relay.environment,
    id: '123',
    name: 'the 123',
  });
});
