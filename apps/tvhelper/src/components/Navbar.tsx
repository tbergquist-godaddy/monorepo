import { Navbar as DSNavbar, Box } from '@tbergq/components';
import jwtDecode from 'jwt-decode';

import NavbarRight from './NavbarRight';
import NavLink from './NavLink';

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
      <Box paddingY={{ mediumMobile: 'tiny', tablet: 'none' }}>
        <NavLink href="/favorites">Favorites</NavLink>
      </Box>
      <Box paddingY={{ mediumMobile: 'tiny', tablet: 'none' }}>
        <NavLink href="/episodes">Episodes</NavLink>
      </Box>
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
