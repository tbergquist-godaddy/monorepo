// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Link from 'next/link';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const Nav = styled.nav({
  backgroundColor: '#222',
  borderColor: '#090909',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  minHeight: '50px',
  zIndex: defaultTokens.zIndexOnTheTop,
});

export const NavLink = styled.a(({ marginLeft }) => ({
  color: '#e2e2e2',
  textDecoration: 'none',
  ':hover': {
    color: '#fff',
  },
  marginLeft,
}));

const Brand = styled(NavLink)({
  fontSize: '18px',
});

const Content = styled.div({
  paddingTop: '15px',
  paddingBottom: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,
});

const NavContainer = styled(Container)({
  display: 'flex',
});

type Props = {|
  +brand: React.Node,
  +headerLeft?: React.Node,
  +headerRight?: React.Node,
|};

export default function Navbar(props: Props) {
  return (
    <Nav>
      <NavContainer>
        <Content>
          <div>
            <Link href="/">
              <Brand href="/">{props.brand}</Brand>
            </Link>
            {props.headerLeft}
          </div>
          <div>{props.headerRight}</div>
        </Content>
      </NavContainer>
    </Nav>
  );
}
