// @flow

import * as React from 'react';
// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link';

type Props = {|
  +children: ?React.ChildrenArray<?React.Node> | ?React.Node,
  +href: string,
  +prefetch?: boolean,
  +className?: string,
|};

export default function Link({ href, children, className, ...rest }: Props): React.Node {
  return (
    <NextLink href={href} {...rest}>
      <a className={className} href={href}>
        {children}
      </a>
    </NextLink>
  );
}
