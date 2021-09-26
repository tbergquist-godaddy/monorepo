import { graphql, useFragment } from 'react-relay';
import { format } from 'date-fns';
import { isLoggedIn } from '@tbergq/utils';
import { Checkbox } from '@tbergq/components';
import { Episode_episode$key as EpisodeType } from '__generated__/Episode_episode.graphql';
import useToggleWatched from 'commands/use-toggle-watched';

import { classNames } from './Episode.css';

type Props = Readonly<{
  episode: EpisodeType;
}>;

const Episode = (props: Props): JSX.Element => {
  const data = useFragment<EpisodeType>(
    graphql`
      fragment Episode_episode on Episode {
        name
        seasonAndNumber
        airdate
        summary
        watched
        ...useToggleWatched
      }
    `,
    props.episode,
  );
  const [toggle, isMutating] = useToggleWatched(data);

  const name = data?.name ?? '';
  const airdate = typeof data?.airdate === 'string' ? data?.airdate : null;
  const rawDate = airdate != null ? new Date(airdate) : null;
  const date = rawDate !== null ? format(rawDate, 'do MMM yyyy') : '';
  const seasonAndNumber = data?.seasonAndNumber ?? '';
  const summary = data?.summary ?? '';
  const watched = data?.watched === true;

  const toggleWatched = () => {
    if (!isMutating) {
      toggle();
    }
  };

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
