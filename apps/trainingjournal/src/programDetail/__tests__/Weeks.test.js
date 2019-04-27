// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Weeks } from '../Weeks';

const renderer = new ShallowRenderer();
const $refType: any = null;

const program = {
  weeks: {
    edges: [{ node: { id: 'id', name: 'week name' } }],
  },
  $refType,
};

it('renders', () => {
  expect(renderer.render(<Weeks program={program} />)).toMatchInlineSnapshot(`
    <div>
      <div>
        week name
      </div>
    </div>
  `);
});
