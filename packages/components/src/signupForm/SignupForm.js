// @flow

import * as React from 'react';
import styled from 'styled-components';
import { InputField as Input } from '@kiwicom/orbit-components';

import Button from '../button/Button';
import Toast from '../toast/Toast';

const SubmitButton = styled(Button)({
  float: 'right',
  marginTop: '8px',
});

type User = {|
  username: string,
  email: string,
  password: string,
|};

type Props = {|
  +onSubmit: User => void,
  +isLoading: boolean,
|};

export default (React.forwardRef<Props, React.ElementRef<typeof Toast> | null>((props, ref) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onUsernameChange = e => {
    setUsername(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const showToast = (message: string) => {
    if (typeof ref === 'object') {
      const show = ref.current?.show;
      if (typeof show === 'function') {
        show({ text: message, type: 'danger' });
      }
    }
  };

  function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      showToast('password and confirm password does not match');
      return;
    }
    props.onSubmit({ username, password, email });
  }
  return (
    <form onSubmit={onSubmit}>
      <Input
        name="username"
        value={username}
        onChange={onUsernameChange}
        label="Username"
        dataTest="usernameInput"
      />
      <Input
        name="email"
        value={email}
        onChange={onEmailChange}
        label="Email"
        dataTest="emailInput"
      />
      <Input
        name="password"
        value={password}
        onChange={onPasswordChange}
        label="Password"
        type="password"
        dataTest="passwordInput"
      />
      <Input
        name="confirmPassword"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        label="Confirm password"
        type="password"
        dataTest="confirmPasswordInput"
      />
      <SubmitButton type="submit" loading={props.isLoading} dataTest="submitButton">
        Confirm
      </SubmitButton>
      <Toast ref={ref} />
    </form>
  );
}): React.AbstractComponent<Props, null | React.ElementRef<typeof Toast>>);
