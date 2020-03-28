// @flow

import * as React from 'react';
import { CenterForm } from '@tbergq/components';

import SignupForm from './SignupForm';

export default function Signup(): React.Element<typeof CenterForm> {
  return (
    <CenterForm>
      <SignupForm />
    </CenterForm>
  );
}
