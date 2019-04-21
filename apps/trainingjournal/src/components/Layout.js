// @flow

import * as React from 'react';
import { Layout as PageLayout, Navbar } from '@tbergq/tvhelper-components';

type Props = {|
  +children: React.Node,
|};

export default function Layout(props: Props) {
  return (
    <>
      <Navbar brand="Traningjournal" />
      <PageLayout>{props.children}</PageLayout>
    </>
  );
}
