// @flow

import * as React from 'react';
import styled from 'styled-components';

import Input from '../Input';
import Button from '../Button';

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '8px',
});

type Props = {|
  +onSubmit: (username: string, password: string) => void,
  +loading: boolean,
|};

export default function LoginForm(props: Props) {
  const [username, changeUsername] = React.useState('');
  const [password, changePassword] = React.useState('');

  function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onSubmit(username, password);
  }

  return (
    <form onSubmit={onSubmit}>
      <Input label="Username" value={username} onChange={changeUsername} />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={changePassword}
      />
      <ButtonWrapper>
        <Button loading={props.loading} submit={true}>
          Login
        </Button>
      </ButtonWrapper>
    </form>
  );
}
