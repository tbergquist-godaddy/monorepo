// @flow strict-local

import * as React from 'react';
import { Formik, Form } from 'formik';
import { InputField, Heading, Stack, Button, Toast } from '@tbergq/components';
import styled from 'styled-components';
import { useMutation, graphql } from '@tbergq/relay';

import type { ChangePasswordFormMutation } from './__generated__/ChangePasswordFormMutation.graphql';

const ButtonWrapper = styled.div({
  justifyContent: 'flex-end',
  display: 'flex',
});

export default (function ChangePasswordForm() {
  const toastRef = React.useRef(null);
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
      onCompleted: res => {
        if (res.tvHelperChangePassword?.message != null && toastRef.current != null) {
          toastRef.current.show(res.tvHelperChangePassword.message);
        } else if (res.tvHelperChangePassword?.success === true && toastRef.current != null) {
          toastRef.current.show('Password changed successfully');
        }
      },
    });
  };
  return (
    <>
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
          <Stack spacing="natural">
            <Heading type="title3" element="h3">
              Change password
            </Heading>
            <InputField type="password" name="password" label="Old password" />
            <InputField type="password" name="newPassword" label="New password" />
            <InputField type="password" name="confirmPassword" label="Confirm password" />
            <ButtonWrapper>
              <Button loading={isLoading} submit={true}>
                Change password
              </Button>
            </ButtonWrapper>
          </Stack>
        </Form>
      </Formik>
      <Toast ref={toastRef} />
    </>
  );
}: React.ComponentType<{}>);
