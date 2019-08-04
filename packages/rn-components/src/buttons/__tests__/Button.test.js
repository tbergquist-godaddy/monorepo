// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

test('Text', () => {
  expect(create(<Button onPress={jest.fn()} text="test" />)).toMatchInlineSnapshot(`
    <div
      className="css-view-1dbjc4n"
      data-focusable={true}
      onKeyDown={[Function]}
      onKeyUp={[Function]}
      onResponderGrant={[Function]}
      onResponderMove={[Function]}
      onResponderRelease={[Function]}
      onResponderTerminate={[Function]}
      onResponderTerminationRequest={[Function]}
      onStartShouldSetResponder={[Function]}
      style={
        Object {
          "MozTransitionProperty": "opacity",
          "MozUserSelect": "none",
          "WebkitTransitionDuration": "0.15s",
          "WebkitTransitionProperty": "opacity",
          "WebkitUserSelect": "none",
          "backgroundColor": "rgba(0,0,255,1.00)",
          "borderBottomLeftRadius": "6px",
          "borderBottomRightRadius": "6px",
          "borderTopLeftRadius": "6px",
          "borderTopRightRadius": "6px",
          "cursor": "pointer",
          "msTouchAction": "manipulation",
          "msUserSelect": "none",
          "paddingBottom": "10px",
          "paddingLeft": "10px",
          "paddingRight": "10px",
          "paddingTop": "10px",
          "touchAction": "manipulation",
          "transitionDuration": "0.15s",
          "transitionProperty": "opacity",
          "userSelect": "none",
        }
      }
      tabIndex="0"
    >
      <div
        className="css-text-901oao"
        dir="auto"
        style={
          Object {
            "WebkitAlignSelf": "center",
            "alignSelf": "center",
            "color": "rgba(255,255,255,1.00)",
            "fontSize": "15px",
            "msFlexItemAlign": "center",
          }
        }
      >
        test
      </div>
    </div>
  `);
});
