// @flow

import * as React from 'react';
import { Layout as PageLayout, Navbar, NavLink } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/utils';
import cookie from 'js-cookie';

type Props = {|
  +children: React.Node,
  +isLoggedIn: boolean,
|};

const onLogout = () => {
  cookie.remove(TOKEN_KEY);
};

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
    <NavLink href="/" onClick={onLogout}>
      logout
    </NavLink>
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
