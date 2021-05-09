// @flow strict-local

import type { ComponentType } from 'react';
import { Formik, Form } from 'formik';
import { Heading, InputField, Button, useShowToast, Stack } from '@tbergq/components';
import styled from 'styled-components';
import { useMutation, graphql } from '@tbergq/relay';

import type { ChangePasswordFormMutation } from './__generated__/ChangePasswordFormMutation.graphql';

const ButtonWrapper = styled.div({
  justifyContent: 'flex-end',
  display: 'flex',
});

export default (function ChangePasswordForm() {
  const show = useShowToast();
  const [changePassword, isLoading] = useMutation<ChangePasswordFormMutation>(graphql`
    mutation ChangePasswordFormMutation($password: String!, $newPassword: String!) {
      tvHelperChangePassword(password: $password, newPassword: $newPassword) {
        ... on ChangePasswordResponse {
          success
        }
        ... on ChangePasswordError {
          message
        }
      }
    }
  `);
  const onSubmit = ({ password, newPassword }) => {
    changePassword({
      variables: { password, newPassword },
      onCompleted: (res) => {
        if (res.tvHelperChangePassword?.message != null) {
          show({ text: res.tvHelperChangePassword.message, type: 'danger' });
        } else if (res.tvHelperChangePassword?.success === true) {
          show({ text: 'Password changed successfully', type: 'success' });
        }
      },
    });
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ password: '', newPassword: '', confirmPassword: '' }}
      validate={({ newPassword, confirmPassword, password }) => {
        const errors = {};

        if (password === '') {
          errors.password = 'This field is required';
        }
        if (newPassword === '') {
          errors.newPassword = 'This field is required';
        }
        if (confirmPassword === '') {
          errors.confirmPassword = 'This field is required';
        }
        if (confirmPassword !== '' && newPassword !== confirmPassword) {
          errors.confirmPassword = 'Confirm password does not match new password';
        }
        return errors;
      }}
    >
      <Form>
        <Stack>
          <Heading level="h3">Change password</Heading>
          <InputField type="password" name="password" label="Old password" />
          <InputField type="password" name="newPassword" label="New password" />
          <InputField type="password" name="confirmPassword" label="Confirm password" />
          <ButtonWrapper>
            <Button loading={isLoading} type="submit">
              Change password
            </Button>
          </ButtonWrapper>
        </Stack>
      </Form>
    </Formik>
  );
}: ComponentType<{}>);
