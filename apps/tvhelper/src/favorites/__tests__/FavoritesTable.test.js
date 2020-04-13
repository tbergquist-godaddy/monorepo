// @flow

import * as React from 'react';
import { render, fireEvent } from '@tbergq/test-utils';
import { QueryRenderer, graphql } from '@tbergq/relay';
import { MockPayloadGenerator, createMockEnvironment } from 'relay-test-utils';
import '@testing-library/jest-dom/extend-expect';

import FavoritesTable from '../FavoritesTable';

const payload = {
  TvShowConnection: () => {
    return {
      edges: [
        {
          node: {
            id: '123',
            name: 'Show 123',
            nextEpisode: '10-06-2019',
            previousEpisode: '09-06-2019',
            status: 'Running',
          },
        },
        {
          node: {
            id: '234',
            name: 'Show 234',
            nextEpisode: null,
            previousEpisode: '09-06-2019',
            status: 'Ended',
          },
        },
      ],
    };
  },
};

const refetchPayload = {
  TvShowConnection: () => {
    return {
      edges: [
        {
          node: {
            id: '321',
            name: 'Show 321',
            nextEpisode: '10-06-2019',
            previousEpisode: '09-06-2019',
            status: 'Running',
          },
        },
        {
          node: {
            id: '432',
            name: 'Show 432',
            nextEpisode: null,
            previousEpisode: '09-06-2019',
            status: 'Ended',
          },
        },
      ],
    };
  },
};

const renderer = props => {
  return <FavoritesTable favorites={props?.viewer} />;
};
let environment;

const TestRenderer = () => (
  <QueryRenderer
    query={graphql`
      query FavoritesTableTestQuery @relay_test_operation {
        viewer {
          ...FavoritesTable_favorites
        }
      }
    `}
    render={renderer}
    environment={environment}
    variables={{}}
  />
);

beforeEach(() => {
  environment = createMockEnvironment();
});

describe('Favorites table', () => {
  it('handles on header click', () => {
    const { getByText, getByTestId } = render(<TestRenderer />);
    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, payload),
    );

    const nextEpisodeHeader = getByText('Next episode');
    fireEvent.click(nextEpisodeHeader);
    const loader = getByTestId('tableLoader');

    expect(loader).toBeInTheDocument();
    const sortIcon = nextEpisodeHeader.querySelector('svg');

    expect(sortIcon).toBeInTheDocument();

    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, refetchPayload),
    );

    expect(loader).not.toBeInTheDocument();

    const refetchedTvShow = getByText('Show 432');
    expect(refetchedTvShow).toBeInTheDocument();
  });
});
