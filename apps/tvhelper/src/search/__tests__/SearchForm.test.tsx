import { render, fireEvent, act } from '@tbergq/test-utils';
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
  it('sets intial input value correctly', () => {
    const { getByTestId } = render(<TestRenderer />);
    expect(getByTestId('SearchFormInput').value).not.toBeNull();
  });

  it('updates input value', async () => {
    const { getByTestId } = render(<TestRenderer />);
    const input = getByTestId('SearchFormInput');

    await act(async () => {
      await fireEvent.change(input, { target: { value: 'test' } });
    });
    expect(input.value).toEqual('test');
  });
});
