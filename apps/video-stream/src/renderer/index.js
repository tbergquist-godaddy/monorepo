// @flow

import * as React from 'react';
import { render } from 'react-dom';

import CastTest from './cast/CastTest';

const App = () => (
  <>
    <div>my electron app</div>
    <CastTest />
  </>
);

const root = document.getElementById('root');
if (root != null) {
  render(<App />, root);
}
