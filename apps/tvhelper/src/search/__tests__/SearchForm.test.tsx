import { render, waitFor } from '@tbergq/test-utils';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';

import SearchForm from '../SearchForm';

jest.mock('next/router', () => ({
  useRouter: () => ({ query: { query: 'myQuery' } }),
}));

const TestRenderer = () => (
  <Formik onSubmit={jest.fn()} initialValues={{ query: '' }}>
    <SearchForm />
  </Formik>
);

describe('SearchForm', () => {
  it('sets initial input value correctly', () => {
    const { getByTestId } = render(<TestRenderer />);
    expect(getByTestId('SearchFormInput').value).not.toBeNull();
  });

  it('updates input value', async () => {
    const { getByTestId } = render(<TestRenderer />);
    const input = getByTestId('SearchFormInput');

    userEvent.type(input, 'test');
    await waitFor(() => expect(input.value).toBe('test'));
  });
});
