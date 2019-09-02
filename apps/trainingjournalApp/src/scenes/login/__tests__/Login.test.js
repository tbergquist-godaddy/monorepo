// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import { Login } from '../Login';

it('renders', () => {
  // $FlowExpectedError: Just for testing purpose
  expect(create(<Login navigation={{}} />)).toMatchInlineSnapshot(`
    <View
      style={
        Object {
          "flex": 1,
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
            Object {
              "fontSize": 12,
            },
          ]
        }
      >
        Username
      </Text>
      <TextInput
        allowFontScaling={true}
        onChangeText={[Function]}
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
        value=""
      />
      <Text
        style={
          Array [
            Object {
              "fontSize": 15,
            },
            Object {
              "fontSize": 12,
            },
          ]
        }
      >
        Password
      </Text>
      <TextInput
        allowFontScaling={true}
        onChangeText={[Function]}
        rejectResponderTermination={true}
        secureTextEntry={true}
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
        value=""
      />
      <View
        accessible={true}
        focusable={true}
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
          Login
        </Text>
      </View>
    </View>
  `);
});
