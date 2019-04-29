// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Days } from '../Days';

const renderer = new ShallowRenderer();
const $refType: any = null;
const $fragmentRefs: any = null;

const week = {
  days: {
    edges: [{ node: { id: '1', $fragmentRefs } }],
  },
  $refType,
};

it('renders', () => {
  expect(renderer.render(<Days week={week} />)).toMatchInlineSnapshot(`
    <div>
      <ForwardRef>
        <ForwardRef(Relay(Day))
          day={
            Object {
              "$fragmentRefs": null,
              "id": "1",
            }
          }
        />
      </ForwardRef>
    </div>
  `);
});
