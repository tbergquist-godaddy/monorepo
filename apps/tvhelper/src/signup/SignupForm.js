// @flow

import * as React from 'react';
import { Input, Button, Toast } from '@tbergq/components';
import styled from 'styled-components';
import Router from 'next/router';

import createUserMutation from './mutation/createUserMutation';
import type { createUserMutationResponse } from './mutation/__generated__/createUserMutation.graphql';

const SubmitButton = styled(Button)({
  float: 'right',
  marginTop: '8px',
});

export default function SignupForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const toastRef = React.useRef<React.ElementRef<typeof Toast> | null>(null);

  const showToast = (message: string) => {
    if (toastRef.current != null) {
      toastRef.current.show(message);
    }
  };

  function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      showToast('password and confirm password does not match');
      return;
    }
    setIsLoading(true);
    createUserMutation(
      {
        username,
        password,
        email,
      },
      (response: ?createUserMutationResponse, errors: ?$ReadOnlyArray<Error>) => {
        const success = response?.createUser?.success ?? false;
        if (!success || errors != null) {
          showToast('Failed to create user');
        } else {
          showToast('User was successfully created');
          Router.push('/login');
        }
        setIsLoading(false);
      },
    );
  }
  return (
    <form onSubmit={onSubmit}>
      <Input value={username} onChange={setUsername} label="Username" dataTest="usernameInput" />
      <Input value={email} onChange={setEmail} label="Email" dataTest="emailInput" />
      <Input
        value={password}
        onChange={setPassword}
        label="Password"
        type="password"
        dataTest="passwordInput"
      />
      <Input
        value={confirmPassword}
        onChange={setConfirmPassword}
        label="Confirm password"
        type="password"
        dataTest="confirmPasswordInput"
      />
      <SubmitButton submit={true} loading={isLoading} dataTest="submitButton">
        Confirm
      </SubmitButton>
      <Toast ref={toastRef} />
    </form>
  );
}
