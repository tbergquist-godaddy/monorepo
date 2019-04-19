// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import Link from 'next/link';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { isLoggedIn } from '@tbergq/tvhelper-utils';
import { TOKEN_KEY } from '@tbergq/tvhelper-relay';

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

const NavLink = styled.a(({ marginLeft }) => ({
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

const onLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export default function Navbar() {
  const loggedIn = isLoggedIn();
  return (
    <Nav>
      <NavContainer>
        <Content>
          <div>
            <Link href="/">
              <Brand href="/">Tvhelper</Brand>
            </Link>
            {loggedIn && (
              <Link href="/favorites">
                <NavLink marginLeft="8px" href="/favorites">
                  Favorites
                </NavLink>
              </Link>
            )}
          </div>
          {!loggedIn ? (
            <Link href="/login">
              <NavLink href="/login">login</NavLink>
            </Link>
          ) : (
            <Link href="/">
              <NavLink href="/" onClick={onLogout}>
                logout
              </NavLink>
            </Link>
          )}
        </Content>
      </NavContainer>
    </Nav>
  );
}
