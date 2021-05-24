import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputField from '../InputField';

const setup = () => {
  const renderComponent = (props) => render(<InputField {...props} />);
  return {
    renderComponent,
  };
};
it('renders correctly', () => {
  const { renderComponent } = setup();
  const label = 'Label test';

  renderComponent({ label, name: 'test' });

  const input = screen.getByLabelText(label);
  expect(input).toBeInTheDocument();
});

it('shows error', () => {
  const { renderComponent } = setup();
  const error = 'test is required';

  renderComponent({ label: 'test', error });

  expect(screen.getByText(error)).toBeInTheDocument();
});

it('calls the onChange handler', async () => {
  const { renderComponent } = setup();
  const onChange = jest.fn();
  const label = 'label';

  renderComponent({ label, onChange });

  const input = screen.getByLabelText(label);
  expect(input).toBeInTheDocument();

  userEvent.type(input, 't');

  await waitFor(() =>
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 't' }),
      }),
    ),
  );
});

it('sets the value', () => {
  const { renderComponent } = setup();
  const label = 'label';
  const value = 'val';
  const onChange = jest.fn();

  renderComponent({ label, value, onChange });

  const input = screen.getByLabelText(label);
  expect(input).toHaveValue(value);
});
