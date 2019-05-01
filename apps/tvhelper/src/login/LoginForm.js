// @flow

import * as React from 'react';
import { LoginForm as CommonLoginForm, Toast } from '@tbergq/components';
import { TOKEN_KEY } from '@tbergq/relay';
import Router from 'next/router';

import loginMutation from './mutation/LoginMutation';
import type { LoginMutationResponse } from './mutation/__generated__/LoginMutation.graphql';

export default function LoginForm() {
  const [loading, changeLoading] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState(null);
  function onHide() {
    setToastMessage(null);
  }
  function onSubmit(username, password) {
    changeLoading(true);
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
        } else {
          setToastMessage('Login failed');
        }
        changeLoading(false);
      },
    );
  }

  return (
    <>
      <CommonLoginForm onSubmit={onSubmit} loading={loading} />
      <Toast message={toastMessage} onHide={onHide} />
    </>
  );
}
