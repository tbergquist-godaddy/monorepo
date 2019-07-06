// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Text from '../Text';

test('Text', () => {
  expect(create(<Text>test</Text>)).toMatchInlineSnapshot(`
    <Text
      style={
        Array [
          Object {
            "fontSize": 15,
          },
          undefined,
        ]
      }
    >
      test
    </Text>
  `);
});
