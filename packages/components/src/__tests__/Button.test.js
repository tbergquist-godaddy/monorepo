// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

it('renders', () => {
  expect(create(<Button>test</Button>)).toMatchInlineSnapshot(`
    <button
      className="Button__StyledButton-sc-1brqp3f-1 ctnCkB"
      size="normal"
      type="button"
    >
      <div
        className="Button__StyledButtonContent-sc-1brqp3f-2 bmuxXg"
      >
        test
      </div>
    </button>
  `);
});
