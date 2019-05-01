// @flow

/* eslint-disable no-alert */

import * as React from 'react';
import { Input, Button } from '@tbergq/components';
import styled from 'styled-components';
import Router from 'next/router';

import createUserMutation from './mutation/createUserMutation';

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
  function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password and confirm password does not match');
      return;
    }
    setIsLoading(true);
    createUserMutation(
      {
        username,
        password,
        email,
      },
      (response: ?Object, errors: ?$ReadOnlyArray<Error>) => {
        if (errors == null) {
          alert('User was successfully created');
          Router.push('/login');
        }
        setIsLoading(false);
      },
    );
  }
  return (
    <form onSubmit={onSubmit}>
      <Input value={username} onChange={setUsername} label="Username" />
      <Input value={email} onChange={setEmail} label="Email" />
      <Input
        value={password}
        onChange={setPassword}
        label="Password"
        type="password"
      />
      <Input
        value={confirmPassword}
        onChange={setConfirmPassword}
        label="Confirm password"
        type="password"
      />
      <SubmitButton submit={true} loading={isLoading}>
        Confirm
      </SubmitButton>
    </form>
  );
}
