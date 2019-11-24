// @flow

import * as React from 'react';
import { LoginForm as CommonLoginForm, Toast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/utils';
import Router from 'next/router';
import cookie from 'js-cookie';

import loginMutation from './mutation/trainingJournalLogin';

export default function LoginForm() {
  const [loading, setLoading] = React.useState(false);
  const toastRef = React.useRef<React.ElementRef<typeof Toast> | null>(null);

  const onSubmit = (username, password) => {
    setLoading(true);
    loginMutation(
      username,
      password,

      response => {
        const success = response.trainingJournalLogin?.success;
        const token = response.trainingJournalLogin?.token;
        if (success && token) {
          cookie.set(TOKEN_KEY, token, { expires: 365 });
          Router.push({ pathname: '/home' });
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
