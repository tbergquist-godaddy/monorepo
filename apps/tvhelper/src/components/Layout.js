// @flow strict-local

import type { Node } from 'react';
import { Layout as PageLayout, Navbar, NavLink, Stack } from '@tbergq/components';
import { createFragmentContainer, graphql, type FragmentContainerType } from '@tbergq/relay';

import type { Layout_viewer as Viewer } from './__generated__/Layout_viewer.graphql';
import NavbarRight from './NavbarRight';

type Props = {
  +children: Node,
  +viewer: ?Viewer,
};

function Layout(props: Props) {
  const loggedIn = props.viewer?.__typename === 'TvHelperViewer';
  const headerLeft = loggedIn ? (
    <NavLink marginLeft="8px" href="/favorites">
      Favorites
    </NavLink>
  ) : null;

  return (
    <>
      <header>
        <Navbar
          brand="Tvhelper"
          headerLeft={headerLeft}
          headerRight={<NavbarRight viewer={props.viewer} />}
        />
      </header>
      <main>
        <PageLayout>
          <Stack>{props.children}</Stack>
        </PageLayout>
      </main>
    </>
  );
}

export default (createFragmentContainer(Layout, {
  viewer: graphql`
    fragment Layout_viewer on Viewer {
      __typename
      ...NavbarRight_viewer
    }
  `,
}): FragmentContainerType<Props, Node>);
