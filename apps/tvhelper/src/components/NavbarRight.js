// @flow strict-local

import type { Node } from 'react';
import { createFragmentContainer, graphql, type FragmentContainerType } from '@tbergq/relay';
import { NavLink } from '@tbergq/components';

import type { NavbarRight_viewer as Viewer } from '__generated__/NavbarRight_viewer.graphql';

type Props = {
  +username: ?string,
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
