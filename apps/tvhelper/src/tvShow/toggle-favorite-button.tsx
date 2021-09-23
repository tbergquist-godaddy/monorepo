import { graphql, useFragment } from 'react-relay';
import { IconButton } from '@tbergq/components';
import { MdFavorite } from 'react-icons/md';
import { toggleFavoriteButton$key } from '__generated__/toggleFavoriteButton.graphql';

import useAddFavorite from './mutations/useAddFavorite';
import useDeleteFavorite from './mutations/useDeleteFavorite';
import { classNames } from './toggle-favorite-button.css';

type Props = Readonly<{
  tvShow: toggleFavoriteButton$key;
}>;

const TvShowImage = (props: Props): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment toggleFavoriteButton on TvShow {
        id
        isFavorite
      }
    `,
    props.tvShow,
  );

  const [addFavorite, addLoading] = useAddFavorite();
  const [deleteFavorite, deleteLoading] = useDeleteFavorite();
  const isLoading = addLoading || deleteLoading;
  const isFavorite = data?.isFavorite === true;
  const notLoggedIn = data?.isFavorite == null;

  const onToggleFavorite = () => {
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
  };
  if (notLoggedIn) {
    return null;
  }
  return (
    <IconButton
      loading={isLoading}
      color={isFavorite ? 'danger' : 'primary'}
      onClick={onToggleFavorite}
      dataTest="toggleFavoriteButton"
      ariaLabel={isFavorite ? 'Delete favorite' : 'Add favorite'}
      className={classNames.favoriteButton}
    >
      <MdFavorite />
    </IconButton>
  );
};

export default TvShowImage;
