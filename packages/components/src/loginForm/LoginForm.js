// @flow strict-local

import * as React from 'react';
import styled from 'styled-components';
import { Form, Formik, type FormikConfig } from 'formik';
import { object, string } from 'yup';

import Input from '../input/InputField';
import Button from '../button/Button';
import Stack from '../stack/Stack';

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

const validationSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

export default function LoginForm({ onSubmit, ...formProps }: Props): React.Element<typeof Formik> {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form {...formProps}>
          <Stack>
            <Input name="username" label="Username" />
            <Input name="password" type="password" label="Password" />
            <ButtonWrapper>
              <Button loading={isSubmitting} type="submit" dataTest="LoginFormSubmit">
                Login
              </Button>
            </ButtonWrapper>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
