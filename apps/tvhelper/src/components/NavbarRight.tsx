import NavLink from './NavLink';
import NavItem from './nav-item';

type Props = {
  username: string | undefined;
  onClick?: () => void;
};

function NavbarRight({ username, onClick }: Props): JSX.Element {
  if (username) {
    return (
      <>
        <NavItem>
          <NavLink onClick={onClick} href="/account">
            Hello {username}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={onClick} href="/api/logout">
            logout
          </NavLink>
        </NavItem>
      </>
    );
  }
  return (
    <NavItem>
      <NavLink onClick={onClick} href="/login">
        login
      </NavLink>
    </NavItem>
  );
}

export default NavbarRight;
