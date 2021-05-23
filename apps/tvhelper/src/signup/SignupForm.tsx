import { useShowToast } from '@tbergq/components';
import { SignupForm as CommonSignup } from '@tbergq/formik-wrapper';
import Router from 'next/router';

import useCreateUserMutation from './mutation/useCreateUserMutation';

export default function SignupForm() {
  const [createUserMutation, isLoading] = useCreateUserMutation();
  const show = useShowToast();
  const showToast = (message: string, type: 'success' | 'danger') => {
    show({ text: message, type });
  };

  function onSubmit(user: { username: string; password: string; email: string }) {
    createUserMutation({
      variables: user,
      onCompleted: (response, errors) => {
        const success = response?.createUser?.success ?? false;
        if (!success || errors != null) {
          showToast('Failed to create user', 'danger');
        } else {
          showToast('User was successfully created', 'success');
          Router.push('/login');
        }
      },
    });
  }
  return <CommonSignup isLoading={isLoading} onSubmit={onSubmit} />;
}
