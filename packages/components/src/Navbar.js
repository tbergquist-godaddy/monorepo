// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Link from 'next/link';

const Nav = styled.nav({
  backgroundColor: '#222',
  borderColor: '#090909',
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  minHeight: '50px',
});

const Brand = styled.a({
  paddingTop: '15px',
  paddingBottom: '15px',
  color: '#e2e2e2',
  fontSize: '18px',
  textDecoration: 'none',
  ':hover': {
    color: '#fff',
  },
});

const NavContainer = styled(Container)({
  display: 'flex',
});

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Link href="/">
          <Brand href="/">Tvhelper</Brand>
        </Link>
      </NavContainer>
    </Nav>
  );
}
