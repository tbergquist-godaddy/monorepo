// @flow

import * as React from 'react';
import { NavLink } from '@tbergq/components';
import { isLoggedIn, TOKEN_KEY } from '@tbergq/utils';
import cookie from 'js-cookie';

export default function NavbarRight() {
  if (!isLoggedIn()) {
    return <NavLink href="/login">Login</NavLink>;
  }
  const onClick = () => {
    cookie.remove(TOKEN_KEY);
  };
  return (
    <NavLink href="/" onClick={onClick}>
      Logout
    </NavLink>
  );
}
