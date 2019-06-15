// @flow

import * as React from 'react';
import { Layout as PageLayout, Navbar, NavLink } from '@tbergq/components';
import { isLoggedIn } from '@tbergq/utils';
import { TOKEN_KEY } from '@tbergq/relay';

type Props = {|
  +children: React.Node,
|};

const onLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export default function Layout(props: Props) {
  const loggedIn = isLoggedIn();
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
      <Navbar
        brand="Tvhelper"
        headerLeft={headerLeft}
        headerRight={headerRight}
      />
      <PageLayout>{props.children}</PageLayout>
    </>
  );
}
