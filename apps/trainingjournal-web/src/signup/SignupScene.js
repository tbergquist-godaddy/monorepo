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
  const showToast = (message: string) => {
    if (ref.current !== null) {
      ref.current.show(message);
    }
  };
  const onSubmit = (user: User) => {
    setIsLoading(true);
    createUserMutation(user, data => {
      setIsLoading(false);
      if (data.createTrainingjournalUser?.id == null) {
        showToast('Create user failed');
      } else {
        showToast('User was successfully created');
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
