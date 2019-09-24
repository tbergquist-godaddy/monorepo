// @flow

import * as React from 'react';
import { Platform, TouchableNativeFeedback, View } from 'react-native';
import { create } from 'react-test-renderer';

import Touchable from '../Touchable';

let originalPlatformOS;
let originalVersion;
let originalRipple;

beforeEach(() => {
  originalPlatformOS = Platform.OS;
  originalVersion = Platform.Version;
  originalRipple = TouchableNativeFeedback.Ripple;
});

afterEach(() => {
  Platform.OS = originalPlatformOS;
  // $FlowExpectedError: Not writeable, but acceptable for testing purposes;
  Platform.Version = originalVersion;
  TouchableNativeFeedback.Ripple = originalRipple;
});

it('Renderers touchable native feedback on android >= 21', () => {
  Platform.OS = 'android';
  // $FlowExpectedError: Not writeable, but acceptable for testing purposes;
  Platform.Version = 21;
  TouchableNativeFeedback.Ripple = jest.fn();

  const wrapper = create(
    <Touchable onPress={jest.fn()}>
      <View />
    </Touchable>,
  );

  expect(wrapper.root.findByProps({ testID: 'TouchableNativeFeedback' })).toBeDefined();
  expect(() => {
    wrapper.root.findByProps({ testID: 'TouchableOpacity' });
  }).toThrow();
});

it('Renderers touchable opacity on android < 21', () => {
  Platform.OS = 'android';
  // $FlowExpectedError: Not writeable, but acceptable for testing purposes;
  Platform.Version = 20;
  TouchableNativeFeedback.Ripple = jest.fn();

  const wrapper = create(
    <Touchable onPress={jest.fn()}>
      <View />
    </Touchable>,
  );

  expect(() => {
    wrapper.root.findByProps({ testID: 'TouchableNativeFeedback' });
  }).toThrow();
  expect(wrapper.root.findByProps({ testID: 'TouchableOpacity' })).toBeDefined();
});

it('Renderers touchable opacity on ios', () => {
  Platform.OS = 'ios';
  TouchableNativeFeedback.Ripple = jest.fn();

  const wrapper = create(
    <Touchable onPress={jest.fn()}>
      <View />
    </Touchable>,
  );

  expect(() => {
    wrapper.root.findByProps({ testID: 'TouchableNativeFeedback' });
  }).toThrow();
  expect(wrapper.root.findByProps({ testID: 'TouchableOpacity' })).toBeDefined();
});

it('Renderers touchable opacity on web', () => {
  Platform.OS = 'web';
  TouchableNativeFeedback.Ripple = jest.fn();

  const wrapper = create(
    <Touchable onPress={jest.fn()}>
      <View />
    </Touchable>,
  );

  expect(() => {
    wrapper.root.findByProps({ testID: 'TouchableNativeFeedback' });
  }).toThrow();
  expect(wrapper.root.findByProps({ testID: 'TouchableOpacity' })).toBeDefined();
});
