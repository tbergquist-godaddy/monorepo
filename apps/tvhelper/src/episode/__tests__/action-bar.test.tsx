import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

import ActionBar from '../action-bar';

jest.mock('next/router');

const setup = () => {
  const back = jest.fn();
  const renderComponent = () => render(<ActionBar />);
  (useRouter as any).mockImplementation(() => ({ back }));
  return {
    renderComponent,
    back,
  };
};

it('toggles watches status', async () => {
  const { renderComponent } = setup();
  renderComponent();

  const button = screen.getByRole('button', {
    name: 'Mark as watched',
  });
  expect(button).toBeInTheDocument();

  userEvent.click(button);

  await waitFor(() =>
    expect(
      screen.getByRole('button', {
        name: 'Mark as not watched',
      }),
    ).toBeInTheDocument(),
  );
});

it('calls router back', () => {
  const { renderComponent, back } = setup();
  renderComponent();

  const backlink = screen.getByRole('button', {
    name: 'Back',
  });

  userEvent.click(backlink);

  expect(back).toHaveBeenCalledWith();
});
