// @flow

import * as React from 'react';
import { Layout as PageLayout, Navbar, NavLink } from '@tbergq/components';
import { isLoggedIn } from '@tbergq/utils';
import Link from 'next/link';
import { TOKEN_KEY } from '@tbergq/relay';

type Props = {|
  +children: React.Node,
|};

const onLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export default function Layout(props: Props) {
  const loggedIn = isLoggedIn(false);
  const headerRight = !loggedIn ? (
    <Link href="/login">
      <NavLink href="/login">login</NavLink>
    </Link>
  ) : (
    <Link href="/">
      <NavLink href="/" onClick={onLogout}>
        logout
      </NavLink>
    </Link>
  );
  return (
    <>
      <Navbar brand="Traningjournal" headerRight={headerRight} />
      <PageLayout>{props.children}</PageLayout>
    </>
  );
}
