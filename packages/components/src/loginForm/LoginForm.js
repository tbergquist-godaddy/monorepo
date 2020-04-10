// @flow strict-local

import * as React from 'react';
import styled from 'styled-components';
import { Form, Formik, type FormikConfig } from 'formik';

import Input from '../InputField';
import Button from '../button/Button';

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '8px',
});

type FormType = FormikConfig<{ +username: string, +password: string }>;

type Props = {
  +onSubmit: $PropertyType<FormType, 'onSubmit'>,
  +action?: string,
  +method?: 'GET' | 'POST',
};

export default function LoginForm({ onSubmit, ...formProps }: Props): React.Element<typeof Formik> {
  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form {...formProps}>
          <Input name="username" label="Username" />
          <Input name="password" type="password" label="Password" />
          <ButtonWrapper>
            <Button loading={isSubmitting} submit={true} dataTest="LoginFormSubmit">
              Login
            </Button>
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
}
