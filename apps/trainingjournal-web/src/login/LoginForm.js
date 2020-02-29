// @flow

import * as React from 'react';
import { LoginForm as CommonLoginForm, Toast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/utils';
import Router from 'next/router';
import cookie from 'js-cookie';
import { useRelayEnvironment } from '@tbergq/relay';

import loginMutation from './mutation/trainingJournalLogin';

export default function LoginForm() {
  const toastRef = React.useRef<React.ElementRef<typeof Toast> | null>(null);
  const environment = useRelayEnvironment();
  const onSubmit = ({ username, password }, { setSubmitting }) => {
    loginMutation(
      environment,
      username,
      password,

      response => {
        const success = response.trainingJournalLogin?.success;
        const token = response.trainingJournalLogin?.token;
        if (success === true && token != null) {
          cookie.set(TOKEN_KEY, token, { expires: 365 });
          Router.push({ pathname: '/home' });
        } else if (toastRef.current != null) {
          toastRef.current.show('Login failed');
        }
        setSubmitting(false);
      },
    );
  };

  return (
    <>
      <CommonLoginForm onSubmit={onSubmit} />
      <Toast ref={toastRef} />
    </>
  );
}
