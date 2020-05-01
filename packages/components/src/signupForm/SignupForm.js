// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';

import Button from '../button/Button';
import Toast from '../toast/Toast';
import Input from '../input/InputField';

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

type FormikValues = $ReadOnly<{
  ...User,
  confirmPassword: string,
}>;

export default (React.forwardRef<Props, React.ElementRef<typeof Toast> | null>((props, ref) => {
  const showToast = (message: string) => {
    if (typeof ref === 'object') {
      const show = ref.current?.show;
      if (typeof show === 'function') {
        show({ text: message, type: 'danger' });
      }
    }
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
        <Toast ref={ref} />
      </Form>
    </Formik>
  );
}): React.AbstractComponent<Props, null | React.ElementRef<typeof Toast>>);
