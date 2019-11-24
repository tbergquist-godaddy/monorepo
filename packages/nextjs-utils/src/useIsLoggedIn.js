// @flow

import * as React from 'react';
import { useRouter } from 'next/router';

type Props = {
  +isLoggedIn: boolean,
  ...
};

export default function useIsLoggedIn({ isLoggedIn }: Props) {
  const router = useRouter();
  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);
}
