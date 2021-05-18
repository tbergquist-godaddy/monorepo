// @flow strict-local

import { NavLink } from '@tbergq/components';

type Props = {
  username: string | undefined;
  onClick?: () => void;
};

function NavbarRight({ username, onClick }: Props) {
  if (username) {
    return (
      <>
        <NavLink onClick={onClick} href="/account">
          Hello {username}
        </NavLink>
        <NavLink onClick={onClick} href="/api/logout">
          logout
        </NavLink>
      </>
    );
  }
  return (
    <NavLink onClick={onClick} href="/login">
      login
    </NavLink>
  );
}

export default NavbarRight;
