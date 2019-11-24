// @flow

import * as React from 'react';
import { useIsLoggedIn } from '@tbergq/nextjs-utils';
import { Link } from '@tbergq/components';

type Props = {|
  +isLoggedIn: boolean,
|};

export default function Home(props: Props) {
  useIsLoggedIn(props);
  return (
    <div>
      <Link href="/home/exercises">Exercises</Link>
    </div>
  );
}
