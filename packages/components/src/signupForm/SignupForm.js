// @flow

import * as React from 'react';
import styled from 'styled-components';

import Input from '../Input';
import Button from '../button/Button';
import Toast from '../Toast';

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

  const showToast = (message: string) => {
    if (typeof ref === 'object') {
      const show = ref.current?.show;
      if (typeof show === 'function') {
        show(message);
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
        onChange={setUsername}
        label="Username"
        dataTest="usernameInput"
      />
      <Input name="email" value={email} onChange={setEmail} label="Email" dataTest="emailInput" />
      <Input
        name="password"
        value={password}
        onChange={setPassword}
        label="Password"
        type="password"
        dataTest="passwordInput"
      />
      <Input
        name="confirmPassword"
        value={confirmPassword}
        onChange={setConfirmPassword}
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
