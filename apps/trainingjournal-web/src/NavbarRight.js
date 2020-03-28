// @flow

import * as React from 'react';
import { NavLink } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/utils';
import cookie from 'js-cookie';

type Props = {|
  +isLoggedIn: boolean,
|};

export default function NavbarRight({ isLoggedIn }: Props): React.Node {
  if (!isLoggedIn) {
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
