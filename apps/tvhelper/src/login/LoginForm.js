// @flow

import type { Element } from 'react';
import { LoginForm as CommonLoginForm, useShowToast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/utils';
import Router from 'next/router';
import cookie from 'js-cookie';
import { useRelayEnvironment } from '@tbergq/relay';

import loginMutation from './mutation/loginMutation';

export default function LoginForm(): Element<typeof CommonLoginForm> {
  const show = useShowToast();
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
        } else {
          show({ text: 'Login failed', type: 'danger' });
        }
        setSubmitting(false);
      },
    );
  };

  return <CommonLoginForm action="/api/login" method="POST" onSubmit={onSubmit} />;
}
