// @flow

import {
  render,
  createMockEnvironment,
  MockPayloadGenerator,
  screen,
  act,
  fireEvent,
} from '@tbergq/test-utils';
import { graphql, QueryRenderer, RelayEnvironmentProvider } from '@tbergq/relay';
import { Formik } from 'formik';

import Favorites from '../Favorites';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <RelayEnvironmentProvider environment={environment}>
    <Formik initialValues={{ sortBy: 'PREVIOUS_EPISODE', sortDirection: 'DESC' }}>
      <QueryRenderer
        query={graphql`
          query FavoritesTestQuery @relay_test_operation {
            viewer {
              ...Favorites_favorites
            }
          }
        `}
        variables={{}}
        render={(props) => <Favorites favorites={props?.viewer} />}
      />
    </Formik>
  </RelayEnvironmentProvider>
);

it('refetches', async () => {
  render(<TestRenderer />);
  environment.mock.resolveMostRecentOperation((operation) =>
    MockPayloadGenerator.generate(operation, {
      TvShowConnection: () => ({
        edges: [{ node: { name: 'Homeland' } }],
      }),
    }),
  );

  expect(screen.getByText('Homeland')).toBeInTheDocument();

  const sortBy = screen.getByLabelText('Sort by');
  expect(sortBy).toBeInTheDocument();

  await act(async () => {
    await fireEvent.change(sortBy, { target: { name: 'sortBy', value: 'NAME' } });
  });
  environment.mock.resolveMostRecentOperation((operation) =>
    MockPayloadGenerator.generate(operation, {
      TvShowConnection: () => ({
        edges: [{ node: { name: 'Dexter' } }],
      }),
    }),
  );
  expect(screen.queryByText('Homeland')).not.toBeInTheDocument();
  expect(screen.getByText('Dexter')).toBeInTheDocument();
});
