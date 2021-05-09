// @flow

import type { Element } from 'react';
import { CenterForm } from '@tbergq/components';

import SignupForm from './SignupForm';

// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
// $FlowFixMe[incompatible-type] $FlowFixMe(>=<150.1>)
export default function Signup(): Element<typeof CenterForm> {
  return (
    // $FlowFixMe[incompatible-return] $FlowFixMe(>=<150.1>)
    <CenterForm>
      <SignupForm />
    </CenterForm>
  );
}
