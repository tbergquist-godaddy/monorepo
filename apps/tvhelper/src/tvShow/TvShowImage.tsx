import { graphql, useFragment } from 'react-relay';
import { IconButton } from '@tbergq/components';
import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { TvShowImage_tvShow$key as TvShow } from '__generated__/TvShowImage_tvShow.graphql';

import useAddFavorite from './mutations/useAddFavorite';
import useDeleteFavorite from './mutations/useDeleteFavorite';

type Props = Readonly<{
  tvShow: TvShow;
}>;

const Image = styled.img({
  maxHeight: '300px',
  borderRadius: '4px',
});

const FavoriteButton = styled(IconButton)({
  'position': 'absolute',
  'bottom': 10,
  'left': 5,
  '&&': {
    borderRadius: '50%',
  },
});

const TvShowImage = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment TvShowImage_tvShow on TvShow {
        id
        name
        image {
          medium
        }
        isFavorite
      }
    `,
    props.tvShow,
  );

  const [addFavorite, addLoading] = useAddFavorite();
  const [deleteFavorite, deleteLoading] = useDeleteFavorite();
  const isLoading = addLoading || deleteLoading;
  const src = data?.image?.medium ?? '';
  const isFavorite = data?.isFavorite === true;
  const notLoggedIn = data?.isFavorite == null;

  function onToggleFavorite() {
    const serieId = data?.id;
    if (serieId != null) {
      const variables = { serieId };
      if (isFavorite === false) {
        addFavorite({ variables });
      } else {
        deleteFavorite({
          variables,
          updater: (store) => {
            const payload = store.getRootField('deleteFavorite');
            if (payload != null) {
              const success = payload.getValue('success') ?? false;
              if (success === true) {
                const serie = store.get(variables.serieId);
                if (serie != null) {
                  serie.setValue(false, 'isFavorite');
                }
              }
            }
          },
        });
      }
    }
  }
  return (
    <>
      <Image loading="lazy" src={src} alt={data?.name} />
      {notLoggedIn === false && (
        <FavoriteButton
          loading={isLoading}
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

export default TvShowImage;
