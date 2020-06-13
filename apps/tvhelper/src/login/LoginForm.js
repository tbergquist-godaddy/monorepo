// @flow

import * as React from 'react';
import { LoginForm as CommonLoginForm, Toast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/utils';
import Router from 'next/router';
import cookie from 'js-cookie';
import { useRelayEnvironment } from '@tbergq/relay';

import loginMutation from './mutation/loginMutation';

export default function LoginForm(): React.Element<typeof React.Fragment> {
  const toastRef = React.useRef<React.ElementRef<typeof Toast> | null>(null);
  const environment = useRelayEnvironment();
  const onSubmit = ({ username, password }, { setSubmitting }) => {
    loginMutation(
      environment,
      {
        username,
        password,
      },
      (response) => {
        const success = response?.tvHelperLogin?.success;
        const token = response?.tvHelperLogin?.token;
        if (success === true && token != null) {
          cookie.set(TOKEN_KEY, token, { expires: 365 });
          Router.push({ pathname: '/favorites' });
        } else if (toastRef.current != null) {
          toastRef.current.show({ text: 'Login failed', type: 'danger' });
        }
        setSubmitting(false);
      },
    );
  };

  return (
    <>
      <CommonLoginForm action="/api/login" method="POST" onSubmit={onSubmit} />
      <Toast ref={toastRef} />
    </>
  );
}
