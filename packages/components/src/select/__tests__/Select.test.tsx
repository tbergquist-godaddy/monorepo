import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Select from '../Select';

const setup = () => {
  const label = 'Nations';
  const onChange = jest.fn();
  const renderComponent = (props = {}) =>
    render(
      <Select
        name="select"
        label={label}
        options={[
          { value: '', label: '--select--' },
          { label: 'Norway', value: 'no' },
          { label: 'Sweeden', value: 'sw' },
        ]}
        {...props}
        onChange={onChange}
      />,
    );
  return {
    renderComponent,
    label,
    onChange,
  };
};

it('calls the onChange callback', async () => {
  const { renderComponent, label, onChange } = setup();

  renderComponent();

  const select = screen.getByLabelText(label);

  expect(select).toBeInTheDocument();
  expect(select).toHaveValue('');

  fireEvent.change(select, { target: { value: 'no', name: 'select' } });
  await waitFor(() =>
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'no', name: 'select' }),
      }),
    ),
  );
});

it('has the correct value', () => {
  const { renderComponent, label } = setup();
  const value = 'sw';
  renderComponent({ value });

  const select = screen.getByLabelText(label);

  expect(select).toBeInTheDocument();
  expect(select).toHaveValue(value);
});

it('shows the error', () => {
  const { renderComponent } = setup();
  const error = 'Select is required';
  renderComponent({ error });

  expect(screen.getByText(error)).toBeInTheDocument();
});
