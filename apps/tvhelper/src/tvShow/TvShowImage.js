// @flow

import * as React from 'react';
import {
  graphql,
  createFragmentContainer,
  type RelayProp,
  type FragmentContainerType,
} from '@tbergq/relay';
import { Button } from '@tbergq/components';
import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';

import type { TvShowImage_tvShow as TvShow } from './__generated__/TvShowImage_tvShow.graphql';
import addFavorite from './mutations/addFavorite';
import deleteFavorite from './mutations/deleteFavorite';

type Props = {|
  +tvShow: ?TvShow,
  +relay: RelayProp,
|};

const Image = styled.img({
  width: '100%',
  maxHeight: '300px',
});

const FavoriteButton = styled(Button)({
  position: 'absolute',
  bottom: 10,
  right: 5,
});

const TvShowImage = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const src = props.tvShow?.image?.original ?? '';
  const isFavorite = props.tvShow?.isFavorite === true;
  const notLoggedIn = props.tvShow?.isFavorite == null;

  function onToggleFavorite() {
    const serieId = props.tvShow?.id;
    function onComplete() {
      setIsLoading(false);
    }
    if (serieId != null) {
      const environment = props.relay.environment;
      const variables = { serieId };
      setIsLoading(true);
      if (isFavorite === false) {
        addFavorite(environment, variables, onComplete);
      } else {
        deleteFavorite(environment, variables, onComplete);
      }
    }
  }
  return (
    <>
      <Image src={src} alt={props.tvShow?.name} />
      {notLoggedIn === false && (
        <FavoriteButton
          loading={isLoading}
          circled={true}
          color={isFavorite ? 'danger' : 'primary'}
          onClick={onToggleFavorite}
          dataTest="toggleFavoriteButton"
          ariaLabel={isFavorite ? 'Delete favorite' : 'Add favorite'}
        >
          <MdFavorite />
        </FavoriteButton>
      )}
    </>
  );
};

export default (createFragmentContainer(TvShowImage, {
  tvShow: graphql`
    fragment TvShowImage_tvShow on TvShow {
      id
      name
      image {
        original
      }
      isFavorite
    }
  `,
}): FragmentContainerType<Props, React.Node>);
