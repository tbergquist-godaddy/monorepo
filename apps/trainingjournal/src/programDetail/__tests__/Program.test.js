// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Program } from '../Program';

const renderer = new ShallowRenderer();
const $fragmentRefs: any = null;
const $refType: any = null;

const program = {
  name: 'name',
  $fragmentRefs,
  $refType,
};

it('renders', () => {
  expect(renderer.render(<Program program={program} />)).toMatchInlineSnapshot(`
    <div>
      <Heading>
        name
      </Heading>
      <ForwardRef>
        <ForwardRef(Relay(Weeks))
          program={
            Object {
              "$fragmentRefs": null,
              "$refType": null,
              "name": "name",
            }
          }
        />
      </ForwardRef>
    </div>
  `);
});
