import NavLink from './NavLink';

type Props = {
  username: string | undefined;
  onClick?: () => void;
};

function NavbarRight({ username, onClick }: Props): JSX.Element {
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
