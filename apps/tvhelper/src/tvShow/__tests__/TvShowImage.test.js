// @flow

import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { MockPayloadGenerator, createMockEnvironment } from 'relay-test-utils';
import { QueryRenderer, graphql } from '@tbergq/relay';

import * as deleteFavorite from '../mutations/deleteFavorite';
import * as addFavorite from '../mutations/addFavorite';
import TvShowImage from '../TvShowImage';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const renderer = props => <TvShowImage tvShow={props.node} />;
const TestRenderer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query TvShowImageTestQuery($id: ID!) @relay_test_operation {
        node(id: $id) {
          ...TvShowImage_tvShow
        }
      }
    `}
    render={renderer}
    variables={{ id: '234' }}
  />
);

describe('TvShowImage', () => {
  it('adds favorite on click', () => {
    const { getByTestId } = render(<TestRenderer />);

    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, {
        TvShow: () => ({
          id: '234',
          image: { original: 'http://mock.url' },
          isFavorite: false,
        }),
      }),
    );
    const spy = jest.spyOn(addFavorite, 'default');

    const toggleButton = getByTestId('toggleFavoriteButton');
    expect(toggleButton).toHaveStyle('background-color: rgb(1, 114, 203)');

    act(() => {
      fireEvent.click(toggleButton);

      const operation = environment.mock.getMostRecentOperation();
      environment.mock.resolve(
        operation,
        MockPayloadGenerator.generate(operation, {
          TvShow: () => ({
            id: '234',
            image: { original: 'http://mock.url' },
            isFavorite: true,
          }),
        }),
      );
    });

    expect(toggleButton).toHaveStyle('background-color: rgb(210, 28, 28)');
    expect(spy).toHaveBeenCalledWith(environment, { serieId: '234' }, expect.any(Function));
  });

  it('removes favorite on click', () => {
    const { getByTestId } = render(<TestRenderer />);

    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, {
        TvShow: () => ({
          id: '234',
          image: { original: 'http://mock.url' },
          isFavorite: true,
        }),
      }),
    );
    const spy = jest.spyOn(deleteFavorite, 'default');

    const toggleButton = getByTestId('toggleFavoriteButton');
    expect(toggleButton).toHaveStyle('background-color: rgb(210, 28, 28)');

    act(() => {
      fireEvent.click(toggleButton);

      const operation = environment.mock.getMostRecentOperation();
      environment.mock.resolve(
        operation,
        MockPayloadGenerator.generate(operation, {
          TvShow: () => ({
            id: '234',
            image: { original: 'http://mock.url' },
            isFavorite: false,
          }),
        }),
      );
    });
    expect(toggleButton).toHaveStyle('background-color: rgb(210, 28, 28)');
    expect(spy).toHaveBeenCalledWith(environment, { serieId: '234' }, expect.any(Function));
  });
});
