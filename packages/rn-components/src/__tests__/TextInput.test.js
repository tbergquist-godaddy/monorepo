// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import TextInput from '../TextInput';

test('TextInput', () => {
  expect(create(<TextInput value="test" onChangeText={jest.fn()} />)).toMatchInlineSnapshot(`
    <input
      autoCapitalize="sentences"
      autoComplete="on"
      autoCorrect="on"
      className="css-textinput-1cwyjr8"
      data-focusable={true}
      dir="auto"
      onBlur={[Function]}
      onChange={[Function]}
      onFocus={[Function]}
      onKeyDown={[Function]}
      onKeyPress={[Function]}
      onSelect={[Function]}
      readOnly={false}
      spellCheck={true}
      style={
        Object {
          "borderBottomColor": "rgba(204,204,204,1.00)",
          "borderBottomLeftRadius": "6px",
          "borderBottomRightRadius": "6px",
          "borderBottomWidth": "1px",
          "borderLeftColor": "rgba(204,204,204,1.00)",
          "borderLeftWidth": "1px",
          "borderRightColor": "rgba(204,204,204,1.00)",
          "borderRightWidth": "1px",
          "borderTopColor": "rgba(204,204,204,1.00)",
          "borderTopLeftRadius": "6px",
          "borderTopRightRadius": "6px",
          "borderTopWidth": "1px",
          "marginBottom": "5px",
          "paddingBottom": "8px",
          "paddingLeft": "8px",
          "paddingRight": "8px",
          "paddingTop": "8px",
        }
      }
      type="text"
      value="test"
    />
  `);
});
