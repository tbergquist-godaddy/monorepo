// @flow strict-local

import * as React from 'react';
import { Layout as PageLayout, Navbar, NavLink } from '@tbergq/components';

type Props = {|
  +children: React.Node,
  +isLoggedIn: boolean,
|};

export default function Layout(props: Props) {
  const loggedIn = props.isLoggedIn;
  const headerLeft = loggedIn ? (
    <NavLink marginLeft="8px" href="/favorites">
      Favorites
    </NavLink>
  ) : null;
  const headerRight = !loggedIn ? (
    <NavLink href="/login">login</NavLink>
  ) : (
    <NavLink href="/api/logout">logout</NavLink>
  );
  return (
    <>
      <header>
        <Navbar brand="Tvhelper" headerLeft={headerLeft} headerRight={headerRight} />
      </header>
      <main>
        <PageLayout>{props.children}</PageLayout>
      </main>
    </>
  );
}
