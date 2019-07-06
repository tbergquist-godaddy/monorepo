// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

test('Text', () => {
  expect(create(<Button onPress={jest.fn()} text="test" />))
    .toMatchInlineSnapshot(`
    <View
      accessible={true}
      clickable={true}
      isTVSelectable={true}
      onClick={[Function]}
      onResponderGrant={[Function]}
      onResponderMove={[Function]}
      onResponderRelease={[Function]}
      onResponderTerminate={[Function]}
      onResponderTerminationRequest={[Function]}
      onStartShouldSetResponder={[Function]}
      style={
        Object {
          "backgroundColor": "blue",
          "borderRadius": 6,
          "opacity": 1,
          "padding": 10,
        }
      }
    >
      <Text
        style={
          Array [
            Object {
              "fontSize": 15,
            },
            Array [
              Object {
                "alignSelf": "center",
              },
              Object {
                "color": "#fff",
              },
            ],
          ]
        }
      >
        test
      </Text>
    </View>
  `);
});
