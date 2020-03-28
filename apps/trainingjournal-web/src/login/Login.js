// @flow

import * as React from 'react';
import { Link, CenterForm } from '@tbergq/components';

import LoginForm from './LoginForm';

export default (function Login() {
  return (
    <CenterForm>
      <LoginForm />
      <Link href="/signup">Don&lsquo;t have an account? Signup</Link>
    </CenterForm>
  );
}: React.ComponentType<{}>);
