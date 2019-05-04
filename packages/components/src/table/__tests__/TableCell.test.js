// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TableCell from '../TableCell';

const renderer = new ShallowRenderer();

it('renders with align=left as default', () => {
  expect(
    renderer.render(
      <TableCell>
        <div />
      </TableCell>,
    ),
  ).toMatchInlineSnapshot(`
        <TableCell
          align="left"
        >
          <div />
        </TableCell>
    `);
});

it('render correctly when passed align prop', () => {
  expect(
    renderer.render(
      <TableCell align="center">
        <div />
      </TableCell>,
    ),
  ).toMatchInlineSnapshot(`
    <TableCell
      align="center"
    >
      <div />
    </TableCell>
  `);
});
