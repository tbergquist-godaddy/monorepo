import { Layout as PageLayout, Navbar as DSNavbar, NavLink, Stack } from '@tbergq/components';
import jwtDecode from 'jwt-decode';

import NavbarRight from './NavbarRight';

type Props = {
  token: string | undefined;
};

interface Claims {
  username: string;
}

function Navbar(props: Props) {
  const username = jwtDecode<Claims | undefined>(props.token)?.username;
  const loggedIn = username != null;

  const headerLeft = loggedIn ? (
    <NavLink marginLeft="8px" href="/favorites">
      Favorites
    </NavLink>
  ) : null;

  return (
    <DSNavbar
      brand="Tvhelper"
      headerLeft={headerLeft}
      headerRight={<NavbarRight username={username} />}
    />
  );
}

export default Navbar;
