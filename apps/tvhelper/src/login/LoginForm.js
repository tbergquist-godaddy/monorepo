// @flow

import * as React from 'react';
import { LoginForm as CommonLoginForm, Toast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/relay';
import Router from 'next/router';

import loginMutation from './mutation/LoginMutation';
import type { LoginMutationResponse } from './mutation/__generated__/LoginMutation.graphql';

export default function LoginForm() {
  const [loading, setLoading] = React.useState(false);
  const toastRef = React.useRef<React.ElementRef<typeof Toast> | null>(null);

  const onSubmit = React.useCallback((username, password) => {
    setLoading(true);
    loginMutation(
      {
        username,
        password,
      },
      (response: ?LoginMutationResponse) => {
        const success = response?.tvHelperLogin?.success;
        const token = response?.tvHelperLogin?.token;
        if (success && token) {
          localStorage.setItem(TOKEN_KEY, token);
          Router.push({ pathname: '/favorites' });
        } else if (toastRef.current != null) {
          toastRef.current.show('Login failed');
        }
        setLoading(false);
      },
    );
  }, []);

  return (
    <>
      <CommonLoginForm onSubmit={onSubmit} loading={loading} />
      <Toast ref={toastRef} />
    </>
  );
}
