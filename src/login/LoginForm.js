// @flow

import * as React from 'react';
import { Input, Button } from '@tbergq/tvhelper-components';
import styled from 'styled-components';
import { TOKEN_KEY } from '@tbergq/tvhelper-relay';
import Router from 'next/router';

import loginMutation from './mutation/LoginMutation';
import type { LoginMutationResponse } from './mutation/__generated__/LoginMutation.graphql';

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '8px',
});

export default function LoginForm() {
  const [username, changeUsername] = React.useState('');
  const [password, changePassword] = React.useState('');
  const [loading, changeLoading] = React.useState(false);
  function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
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
          alert('Login failed');
        }
        changeLoading(false);
      },
    );
  }
  function onUsernameChange(e: SyntheticInputEvent<HTMLInputElement>) {
    changeUsername(e.target.value);
  }
  function onPasswordChange(e: SyntheticInputEvent<HTMLInputElement>) {
    changePassword(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <Input label="Username" value={username} onChange={onUsernameChange} />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <ButtonWrapper>
        <Button loading={loading} submit={true}>
          Login
        </Button>
      </ButtonWrapper>
    </form>
  );
}
