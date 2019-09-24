// @flow

import React from 'react';
import { create } from 'react-test-renderer';
import { Environment } from '@tbergq/relay';
import { AddFavoriteMutation, DeleteFavoriteMutation } from '@tbergq/tvhelper-xplat';

import TvShowScreen, { addConfig, deleteConfig } from '../TvShowScreen';

jest.mock('@tbergq/tvhelper-xplat', () => {
  const xplat = jest.requireActual('@tbergq/tvhelper-xplat');
  return {
    ...xplat,
    AddFavoriteMutation: jest.fn(),
    DeleteFavoriteMutation: jest.fn(),
  };
});

const environment = Environment.getEnvironment();
const navigation = {
  setParams: jest.fn(),
  getParam: jest.fn(),
};
describe('TvShowScreen', () => {
  it('render error text when missing id', () => {
    // $FlowExpectedError: Only mocking needed fields
    const wrapper = create(<TvShowScreen navigation={navigation} />);

    expect(wrapper.root.findByProps({ testID: 'TvShowScreenError' })).not.toBeNull();
  });

  it('queries network when id is passed', () => {
    navigation.getParam.mockImplementationOnce(key => {
      return key === 'id' ? '123' : null;
    });
    // $FlowExpectedError: Only mocking needed fields
    const wrapper = create(<TvShowScreen navigation={navigation} />);
    expect(wrapper.root.findByProps({ testID: 'queryRenderLoader' })).not.toBeNull();
  });

  it('calls add favoriteMutation correctly', () => {
    navigation.getParam.mockImplementation(key => {
      if (key === 'id') return '123';
      if (key === 'isFavorite') return false;
      if (key === 'environment') return environment;
      return null;
    });
    // $FlowExpectedError: Only mocking needed fields
    const wrapper = create(<TvShowScreen navigation={navigation} />).getInstance();
    wrapper.toggleFavoriteMutation();

    expect(AddFavoriteMutation).toHaveBeenCalledWith(
      environment,
      { serieId: '123' },
      expect.any(Function),
      addConfig,
    );
  });

  it('calls delete favoriteMutation correctly', () => {
    navigation.getParam.mockImplementation(key => {
      if (key === 'id') return '123';
      if (key === 'isFavorite') return true;
      if (key === 'environment') return environment;
      return null;
    });
    // $FlowExpectedError: Only mocking needed fields
    const wrapper = create(<TvShowScreen navigation={navigation} />).getInstance();
    wrapper.toggleFavoriteMutation();

    expect(DeleteFavoriteMutation).toHaveBeenCalledWith(
      environment,
      { serieId: '123' },
      expect.any(Function),
      deleteConfig,
    );
  });

  it('throws error if it has no environment', () => {
    navigation.getParam.mockImplementation(key => {
      if (key === 'id') return '123';
      if (key === 'isFavorite') return true;
      if (key === 'environment') return null;
      return null;
    });
    // $FlowExpectedError: Only mocking needed fields
    const wrapper = create(<TvShowScreen navigation={navigation} />).getInstance();

    expect(() => {
      wrapper.toggleFavoriteMutation();
    }).toThrowError('Expected to have relay environment, but did not');
  });
});
