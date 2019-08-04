// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Text from '../Text';

test('Text', () => {
  expect(create(<Text>test</Text>)).toMatchInlineSnapshot(`
    <div
      className="css-text-901oao"
      dir="auto"
      style={
        Object {
          "fontSize": "15px",
        }
      }
    >
      test
    </div>
  `);
});
