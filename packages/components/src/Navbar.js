// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Link from 'next/link';
import defaultTokens from '@kiwicom/orbit-components/lib/defaultTokens';

const Nav = styled.nav({
  backgroundColor: '#222',
  borderColor: '#090909',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  minHeight: '50px',
  zIndex: defaultTokens.orbit.zIndexOnTheTop,
});

const NavLink = styled.a({
  color: '#e2e2e2',
  textDecoration: 'none',
  ':hover': {
    color: '#fff',
  },
});

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

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Content>
          <Link href="/">
            <Brand href="/">Tvhelper</Brand>
          </Link>
          <Link href="/login">
            <NavLink href="/login">login</NavLink>
          </Link>
        </Content>
      </NavContainer>
    </Nav>
  );
}
