// @flow strict-local

import { NavLink } from '@tbergq/components';

type Props = {
  username: string | undefined;
};

function NavbarRight({ username }: Props) {
  if (username) {
    return (
      <>
        <NavLink href="/account">Hello {username}</NavLink>
        <NavLink href="/api/logout">logout</NavLink>
      </>
    );
  }
  return <NavLink href="/login">login</NavLink>;
}

export default NavbarRight;
