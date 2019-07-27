// @flow

import * as React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-restricted-imports
import Link from 'next/link';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const NavLinkInner = styled.a(({ marginLeft }) => ({
  color: '#e2e2e2',
  textDecoration: 'none',
  ':hover': {
    color: '#fff',
  },
  marginLeft: 0,
  [`@media only screen and (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
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

export default function NavLink({ href, children, marginLeft, onClick, ...rest }: Props) {
  return (
    <Link href={href} {...rest}>
      <NavLinkInner onClick={onClick} marginLeft={marginLeft} href={href}>
        {children}
      </NavLinkInner>
    </Link>
  );
}
