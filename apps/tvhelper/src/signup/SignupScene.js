// @flow

import type { Element } from 'react';
import { CenterForm } from '@tbergq/components';

import SignupForm from './SignupForm';

export default function Signup(): Element<typeof CenterForm> {
  return (
    <CenterForm>
      <SignupForm />
    </CenterForm>
  );
}
