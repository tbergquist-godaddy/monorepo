import { Navbar as DSNavbar } from '@tbergq/components';
import jwtDecode from 'jwt-decode';

import NavbarRight from './NavbarRight';
import NavLink from './NavLink';
import NavItem from './nav-item';

type Props = {
  token: string | undefined;
};

interface Claims {
  username: string;
}

function NavbarLeft({ isLoggedIn }: { isLoggedIn: boolean }): JSX.Element {
  if (!isLoggedIn) {
    return null;
  }
  return (
    <>
      <NavItem>
        <NavLink href="/favorites">Favorites</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/episodes">Episodes</NavLink>
      </NavItem>
    </>
  );
}
function Navbar(props: Props): JSX.Element {
  const username = props.token == null ? null : jwtDecode<Claims>(props.token).username;
  const loggedIn = username != null;

  return (
    <DSNavbar
      brand="Tvhelper"
      headerLeft={<NavbarLeft isLoggedIn={loggedIn} />}
      headerRight={<NavbarRight username={username} />}
    />
  );
}

export default Navbar;
