// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Day } from '../Day';

const renderer = new ShallowRenderer();
const $refType: any = null;

const day = {
  name: 'day name',
  $refType,
};

it('renders', () => {
  expect(renderer.render(<Day day={day} />)).toMatchInlineSnapshot(`
    <div>
      day name
    </div>
  `);
});
