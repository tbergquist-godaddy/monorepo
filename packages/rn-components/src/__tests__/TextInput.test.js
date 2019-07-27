// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import TextInput from '../TextInput';

test('TextInput', () => {
  expect(create(<TextInput value="test" onChangeText={jest.fn()} />)).toMatchInlineSnapshot(`
    <TextInput
      allowFontScaling={true}
      onChangeText={[MockFunction]}
      rejectResponderTermination={true}
      style={
        Array [
          Object {
            "borderColor": "#CCCCCC",
            "borderRadius": 6,
            "borderWidth": 1,
            "marginBottom": 5,
            "padding": 8,
          },
          undefined,
        ]
      }
      underlineColorAndroid="transparent"
      value="test"
    />
  `);
});
