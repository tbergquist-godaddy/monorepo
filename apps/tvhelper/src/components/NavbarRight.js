// @flow strict-local

import * as React from 'react';
import { createFragmentContainer, graphql, type FragmentContainerType } from '@tbergq/relay';
import { NavLink } from '@tbergq/components';

import type { NavbarRight_viewer as Viewer } from './__generated__/NavbarRight_viewer.graphql';

type Props = {
  +viewer: ?Viewer,
};

function NavbarRight(props: Props) {
  if (props.viewer?.__typename === 'TvHelperViewer') {
    return (
      <>
        <NavLink href="/account">Hello {props.viewer.username}</NavLink>
        <NavLink href="/api/logout">logout</NavLink>
      </>
    );
  }
  return <NavLink href="/login">login</NavLink>;
}

export default (createFragmentContainer(NavbarRight, {
  viewer: graphql`
    fragment NavbarRight_viewer on Viewer {
      __typename
      ... on TvHelperViewer {
        username
      }
    }
  `,
}): FragmentContainerType<Props, React.Node>);
