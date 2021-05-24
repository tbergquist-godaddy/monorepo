import { render, screen } from '@testing-library/react';

import Alert from '../Alert';

it('has correct backgroundColor for type success', () => {
  render(<Alert type="success">Success alert</Alert>);
  const alert = screen.getByText('Success alert');

  expect(alert).toBeInTheDocument();
  expect(alert).toHaveStyle(`background-color: #d4edda`);
});

it('has correct backgroundColor for type danger', () => {
  render(<Alert type="danger">Danger alert</Alert>);
  const alert = screen.getByText('Danger alert');

  expect(alert).toBeInTheDocument();
  expect(alert).toHaveStyle(`background-color: #f8d7da`);
});
