// @flow

import * as React from 'react';
import { Layout as PageLayout, Navbar, NavLink } from '@tbergq/components';
import { isLoggedIn, TOKEN_KEY } from '@tbergq/utils';

type Props = {|
  +children: React.Node,
|};

const onLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export default function Layout(props: Props) {
  const loggedIn = isLoggedIn();
  const headerRight = !loggedIn ? (
    <NavLink href="/login">login</NavLink>
  ) : (
    <NavLink href="/" onClick={onLogout}>
      logout
    </NavLink>
  );
  return (
    <>
      <Navbar brand="Traningjournal" headerRight={headerRight} />
      <PageLayout>{props.children}</PageLayout>
    </>
  );
}
