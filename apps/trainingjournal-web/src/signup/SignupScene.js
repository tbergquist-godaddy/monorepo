// @flow

import * as React from 'react';
import { SignupForm, Toast, CenterForm } from '@tbergq/components';
import { useRouter } from 'next/router';

import createUserMutation from './mutation/CreateTjUser';

type User = {|
  username: string,
  email: string,
  password: string,
|};

export default function SignupScene(): React.Node {
  const [isLoading, setIsLoading] = React.useState(false);
  const ref = React.useRef(null);
  const router = useRouter();
  const showToast = (message: string, type: 'success' | 'danger') => {
    if (ref.current !== null) {
      ref.current.show({ text: message, type });
    }
  };
  const onSubmit = (user: User) => {
    setIsLoading(true);
    createUserMutation(user, data => {
      setIsLoading(false);
      if (data.createTrainingjournalUser?.id == null) {
        showToast('Create user failed', 'danger');
      } else {
        showToast('User was successfully created', 'success');
        router.push('/login');
      }
    });
  };
  return (
    <CenterForm>
      <SignupForm isLoading={isLoading} ref={ref} onSubmit={onSubmit} />
      <Toast ref={ref} />
    </CenterForm>
  );
}
