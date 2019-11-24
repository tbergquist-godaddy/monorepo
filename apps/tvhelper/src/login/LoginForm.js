// @flow

import * as React from 'react';
import { LoginForm as CommonLoginForm, Toast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/utils';
import Router from 'next/router';
import cookie from 'js-cookie';

import loginMutation from './mutation/loginMutation';

export default function LoginForm() {
  const [loading, setLoading] = React.useState(false);
  const toastRef = React.useRef<React.ElementRef<typeof Toast> | null>(null);

  const onSubmit = (username, password) => {
    setLoading(true);
    loginMutation(
      {
        username,
        password,
      },
      response => {
        const success = response?.tvHelperLogin?.success;
        const token = response?.tvHelperLogin?.token;
        if (success === true && token != null) {
          cookie.set(TOKEN_KEY, token, { expires: 365 });
          Router.push({ pathname: '/favorites' });
        } else if (toastRef.current != null) {
          toastRef.current.show('Login failed');
        }
        setLoading(false);
      },
    );
  };

  return (
    <>
      <CommonLoginForm onSubmit={onSubmit} loading={loading} />
      <Toast ref={toastRef} />
    </>
  );
}
