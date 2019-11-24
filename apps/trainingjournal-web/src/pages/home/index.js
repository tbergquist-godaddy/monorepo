// @flow

import * as React from 'react';
import { useIsLoggedIn } from '@tbergq/nextjs-utils';

type Props = {|
  +isLoggedIn: boolean,
|};

export default function Home(props: Props) {
  useIsLoggedIn(props);
  return props.isLoggedIn ? <div>Logged in</div> : null;
}
