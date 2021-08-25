import { graphql, useFragment } from 'react-relay';
import { format } from 'date-fns';
import { isLoggedIn } from '@tbergq/utils';
import { Checkbox } from '@tbergq/components';
import { Episode_episode$key as EpisodeType } from '__generated__/Episode_episode.graphql';

import useMarkAsWatchedMutation from './mutation/useMarkAsWatched';
import useDeleteAsWatchedMutation from './mutation/useDeleteAsWatched';
import { classNames } from './Episode.css';

type Props = Readonly<{
  episode: EpisodeType;
}>;

const Episode = (props: Props): JSX.Element => {
  const data = useFragment<EpisodeType>(
    graphql`
      fragment Episode_episode on Episode {
        id
        name
        seasonAndNumber
        airdate
        summary
        watched
      }
    `,
    props.episode,
  );
  const [deleteAsWatchedMutation, deleteLoading] = useDeleteAsWatchedMutation();
  const [markAsWatchedMutation, markLoading] = useMarkAsWatchedMutation();

  const isMutating = deleteLoading || markLoading;
  const name = data?.name ?? '';
  const airdate = typeof data?.airdate === 'string' ? data?.airdate : null;
  const rawDate = airdate != null ? new Date(airdate) : null;
  const date = rawDate !== null ? format(rawDate, 'do MMM yyyy') : '';
  const seasonAndNumber = data?.seasonAndNumber ?? '';
  const summary = data?.summary ?? '';
  const watched = data?.watched === true;

  const markAsWatched = () => {
    const episodeId = data?.id;
    if (episodeId != null) {
      markAsWatchedMutation({
        variables: { episodeId },
        optimisticResponse: {
          markAsWatched: {
            success: true,
            episode: {
              id: episodeId,
              watched: true,
            },
          },
        },
      });
    }
  };

  const unMarkAsWatched = () => {
    const episodeId = data?.id;
    if (episodeId != null) {
      deleteAsWatchedMutation({
        variables: { episodeId },
        optimisticResponse: {
          deleteWatchedEpisode: {
            success: true,
            episode: {
              id: episodeId,
              watched: false,
            },
          },
        },
      });
    }
  };
  function toggleWatched() {
    if (!isMutating) {
      if (!watched) {
        markAsWatched();
      } else {
        unMarkAsWatched();
      }
    }
  }

  const onClick = (e) => {
    e.stopPropagation();
    if (isLoggedIn()) {
      toggleWatched();
    }
  };
  return (
    <button
      className={classNames.listItem}
      type="button"
      onClick={onClick}
      onChangeCapture={onClick}
    >
      <span className={classNames.textWrapper}>
        <span className={classNames.title}>{`${seasonAndNumber} - ${name} - ${date}`}</span>
        <span className={classNames.description}>{summary}</span>
      </span>
      {isLoggedIn() && <Checkbox tabIndex={-1} checked={watched} />}
    </button>
  );
};

export default Episode;
