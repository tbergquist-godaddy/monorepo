// @flow

import * as React from 'react';
// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link';

type Props = {|
  +children: ?React.ChildrenArray<?React.Node> | ?React.Node,
  +href: string,
  +prefetch?: boolean,
|};

export default function Link({ href, children, ...rest }: Props): React.Node {
  return (
    <NextLink href={href} {...rest}>
      <a href={href}>{children}</a>
    </NextLink>
  );
}
