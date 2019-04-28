// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Weeks } from '../Weeks';

const renderer = new ShallowRenderer();
const $refType: any = null;
const $fragmentRefs: any = null;

const program = {
  weeks: {
    edges: [{ node: { id: 'id', $fragmentRefs } }],
  },
  $refType,
};

it('renders', () => {
  expect(renderer.render(<Weeks program={program} />)).toMatchInlineSnapshot(`
    <div>
      <React.Fragment>
        <ForwardRef(Relay(Week))
          week={
            Object {
              "$fragmentRefs": null,
              "id": "id",
            }
          }
        />
        <ForwardRef />
      </React.Fragment>
    </div>
  `);
});
