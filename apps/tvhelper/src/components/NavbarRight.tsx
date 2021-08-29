import { Box } from '@tbergq/components';

import NavLink from './NavLink';

type Props = {
  username: string | undefined;
  onClick?: () => void;
};

function NavbarRight({ username, onClick }: Props): JSX.Element {
  if (username) {
    return (
      <>
        <Box paddingY={{ mediumMobile: 'tiny', tablet: 'none' }}>
          <NavLink onClick={onClick} href="/account">
            Hello {username}
          </NavLink>
        </Box>
        <Box paddingY={{ mediumMobile: 'tiny', tablet: 'none' }}>
          <NavLink onClick={onClick} href="/api/logout">
            logout
          </NavLink>
        </Box>
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
