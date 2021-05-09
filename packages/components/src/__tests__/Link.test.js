// @flow

import { create } from 'react-test-renderer';

import Link from '../Link';

it('renders', () => {
  expect(create(<Link href="/test">test</Link>)).toMatchInlineSnapshot(`
    <a
      href="/test"
      onClick={[Function]}
      onMouseEnter={[Function]}
    >
      test
    </a>
  `);
});
