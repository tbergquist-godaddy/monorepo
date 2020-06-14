// @flow

import * as React from 'react';
import { useShowToast, SignupForm as CommonSignup } from '@tbergq/components';
import Router from 'next/router';

import createUserMutation from './mutation/createUserMutation';
import type { createUserMutationResponse } from './mutation/__generated__/createUserMutation.graphql';

export default (function SignupForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const show = useShowToast();
  const showToast = (message: string, type: 'success' | 'danger') => {
    show({ text: message, type });
  };

  function onSubmit(user: {| username: string, password: string, email: string |}) {
    setIsLoading(true);
    createUserMutation(
      user,
      (response: ?createUserMutationResponse, errors: ?$ReadOnlyArray<Error>) => {
        const success = response?.createUser?.success ?? false;
        if (!success || errors != null) {
          showToast('Failed to create user', 'danger');
        } else {
          showToast('User was successfully created', 'success');
          Router.push('/login');
        }
        setIsLoading(false);
      },
    );
  }
  return <CommonSignup isLoading={isLoading} onSubmit={onSubmit} />;
}: React.ComponentType<{}>);
