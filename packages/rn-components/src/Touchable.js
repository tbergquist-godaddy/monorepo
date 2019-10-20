// @flow

/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity.
 *
 * On iOS you can pass the props of TouchableOpacity, on Android pass the props
 * of TouchableNativeFeedback.
 */
import * as React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';
import type { Props as TouchableProps } from 'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback';

type Props = {|
  ...TouchableProps,
  +pressColor: string,
  +disabled?: boolean,
  +borderless?: boolean,
  +delayPressIn?: number,
  +onPress?: () => void | Promise<void>,
  +children: React.Node,
  +style?: $PropertyType<ViewProps, 'style'>,
  +testID?: string,
|};

const ANDROID_VERSION_LOLLIPOP = 21;

export default function Touchable(props: Props) {
  /*
   * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
   * therefore only enable it on Android Lollipop and above.
   *
   * All touchables on Android should have the ripple effect according to
   * platform design guidelines.
   * We need to pass the background prop to specify a borderless ripple effect.
   */
  if (Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP) {
    const { style, pressColor, borderless, children, ...rest } = props;

    return (
      <TouchableNativeFeedback
        {...rest}
        background={TouchableNativeFeedback.Ripple(pressColor, borderless)}
        style={style}
        testID="TouchableNativeFeedback"
      >
        <View style={style}>{React.Children.only(children)}</View>
      </TouchableNativeFeedback>
    );
  }

  const { borderless, pressColor, children, ...rest } = props;
  return (
    <TouchableOpacity activeOpacity={0.5} {...rest} testID="TouchableOpacity">
      {children}
    </TouchableOpacity>
  );
}

Touchable.defaultProps = {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)',
  accessibilityRole: 'button',
};
