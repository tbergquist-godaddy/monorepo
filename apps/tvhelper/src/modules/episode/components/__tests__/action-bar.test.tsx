import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery, RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { actionBarTestQuery } from '__generated__/actionBarTestQuery.graphql';

import ActionBar from '../action-bar';
import useEpisode from '../../models/use-episode';

jest.mock('next/router');

const TestRenderer = () => {
  const data = useLazyLoadQuery<actionBarTestQuery>(
    graphql`
      query actionBarTestQuery @relay_test_operation {
        episode(id: "1") {
          id
          watched
          ...actionBar
        }
      }
    `,
    {},
  );
  const {
    models: { isMutating },
    operations: { toggleEpisodeWatched },
  } = useEpisode({ episodeId: data?.episode?.id, watched: data?.episode?.watched });

  return (
    <ActionBar isMutating={isMutating} actions={{ toggleEpisodeWatched }} dataRef={data?.episode} />
  );
};

const setup = () => {
  const environment = createMockEnvironment();
  const back = jest.fn();
  const renderComponent = async (payload) => {
    render(
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback="loading">
          <TestRenderer />
        </Suspense>
      </RelayEnvironmentProvider>,
    );
    environment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation, payload),
    );
    await waitFor(() => expect(screen.queryByText('loading')).not.toBeInTheDocument());
  };
  (useRouter as any).mockImplementation(() => ({ back }));
  return {
    renderComponent,
    back,
    environment,
  };
};

it('toggles watches status', async () => {
  const { renderComponent } = setup();
  await renderComponent({
    Episode: () => ({
      watched: false,
    }),
  });

  const button = screen.getByRole('button', {
    name: 'Mark as watched',
  });
  expect(button).toBeInTheDocument();

  userEvent.click(button);

  await screen.findByRole('button', {
    name: 'Mark as not watched',
  });
});

it('calls router back', async () => {
  const { renderComponent, back } = setup();
  await renderComponent(null);

  const backlink = screen.getByRole('button', {
    name: 'Back',
  });

  userEvent.click(backlink);

  expect(back).toHaveBeenCalledWith();
});
