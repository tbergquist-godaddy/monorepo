// @flow

import * as React from 'react';
import { useIsLoggedIn } from '@tbergq/nextjs-utils';
import { Link, Heading } from '@tbergq/components';

type Props = {|
  +isLoggedIn: boolean,
|};

export default function Home(props: Props): React.Node {
  useIsLoggedIn(props);
  return (
    <>
      <Heading>Home</Heading>
      <div>
        <Link href="/home/exercises">Exercises</Link>
      </div>
      <div>
        <Link href="/home/programs">Programs</Link>
      </div>
    </>
  );
}
