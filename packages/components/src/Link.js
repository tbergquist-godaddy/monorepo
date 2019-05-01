// @flow

import * as React from 'react';
import NextLink from 'next/link';

type Props = {|
  +children: React.ChildrenArray<React.Node> | React.Node,
  +href: string,
|};

export default function Link(props: Props) {
  return (
    <NextLink href={props.href}>
      <a>{props.children}</a>
    </NextLink>
  );
}
