// @flow

import * as React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-restricted-imports
import Link from 'next/link';

const NavLinkInner = styled.a(({ marginLeft, theme }) => ({
  color: '#e2e2e2',
  textDecoration: 'none',
  ':hover': {
    color: '#fff',
  },
  marginLeft: 0,
  [theme.media.tablet]: {
    marginLeft,
  },
}));

type Props = {|
  +href: string,
  +children: ?React.ChildrenArray<?React.Node> | ?React.Node,
  +marginLeft?: string,
  +prefetch?: boolean,
  +onClick?: () => void,
|};

export default function NavLink({
  href,
  children,
  marginLeft,
  onClick,
  ...rest
}: Props): React.Node {
  return (
    <Link href={href} {...rest}>
      <NavLinkInner onClick={onClick} marginLeft={marginLeft} href={href}>
        {children}
      </NavLinkInner>
    </Link>
  );
}
