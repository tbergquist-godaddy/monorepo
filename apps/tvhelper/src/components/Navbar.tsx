import { Navbar as DSNavbar } from '@tbergq/components';
import { useAuth } from 'components/auth-provider';

import NavbarRight from './NavbarRight';
import NavLink from './NavLink';
import NavItem from './nav-item';

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
function Navbar(): JSX.Element {
  const { username, isLoggedIn } = useAuth();

  return (
    <DSNavbar
      brand="Tvhelper"
      headerLeft={<NavbarLeft isLoggedIn={isLoggedIn} />}
      headerRight={<NavbarRight username={username} />}
    />
  );
}

export default Navbar;
