// @flow

import * as React from 'react';
import { render } from 'react-dom';

const App = () => <div>my electron app</div>;

const root = document.getElementById('root');
if (root != null) {
  render(<App />, root);
}
