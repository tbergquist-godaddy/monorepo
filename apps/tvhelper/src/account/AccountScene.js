// @flow strict-local

import type { ComponentType } from 'react';
import { Heading } from '@tbergq/components';

import ChangePasswordForm from './changePassword/ChangePasswordForm';

export default (function AccountScene() {
  return (
    <>
      <Heading>My Account</Heading>
      <ChangePasswordForm />
    </>
  );
}: ComponentType<{}>);
