// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';

import Button from '../button/Button';
import Input from '../input/InputField';
import { useShowToast } from '../toast/ToastListState';

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
  +onSubmit: (User) => void,
  +isLoading: boolean,
|};

type FormikValues = $ReadOnly<{
  ...User,
  confirmPassword: string,
}>;

export default (function SignupForm(props: Props) {
  const show = useShowToast();
  const showToast = (message: string) => {
    show({ text: message, type: 'danger' });
  };

  function onSubmit({ password, confirmPassword, email, username }: FormikValues) {
    if (password !== confirmPassword) {
      showToast('password and confirm password does not match');
      return;
    }
    props.onSubmit({ username, password, email });
  }
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
      onSubmit={onSubmit}
    >
      <Form>
        <Input name="username" label="Username" dataTest="usernameInput" />
        <Input name="email" label="Email" dataTest="emailInput" />
        <Input name="password" label="Password" type="password" dataTest="passwordInput" />
        <Input
          name="confirmPassword"
          label="Confirm password"
          type="password"
          dataTest="confirmPasswordInput"
        />
        <SubmitButton type="submit" loading={props.isLoading} dataTest="submitButton">
          Confirm
        </SubmitButton>
      </Form>
    </Formik>
  );
}: React.ComponentType<Props>);
