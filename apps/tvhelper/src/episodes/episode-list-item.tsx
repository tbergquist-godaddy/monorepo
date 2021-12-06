import { useAuth } from 'components/auth-provider';
import { format } from 'date-fns';
import { graphql, useFragment } from 'react-relay';
import { episodeListItem$key } from '__generated__/episodeListItem.graphql';
import { IconButton, Box } from '@tbergq/components';
import { BiDetail } from 'react-icons/bi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Link from 'next/link';
import useToggleWatched, {
  ToggleConfig,
} from 'modules/episode/operations/mutations/use-toggle-watched';

import { classNames } from './episode-list-item.css';

type Props = {
  episodeRef: episodeListItem$key;
  includeShowName?: boolean;
  toggleConfig?: ToggleConfig;
};

export default function EpisodeListItem({
  episodeRef,
  includeShowName = false,
  toggleConfig,
}: Readonly<Props>): JSX.Element {
  const { isLoggedIn } = useAuth();
  const data = useFragment<episodeListItem$key>(
    graphql`
      fragment episodeListItem on Episode {
        id
        name
        seasonAndNumber
        airdate
        summary
        watched
        ...useToggleWatched
        tvShow {
          name
        }
      }
    `,
    episodeRef,
  );
  const [toggle, isMutating] = useToggleWatched(data, toggleConfig);

  const onClick = () => {
    if (!isMutating) {
      toggle();
    }
  };
  const name = data?.name ?? '';
  const airdate = typeof data?.airdate === 'string' ? data?.airdate : null;
  const rawDate = airdate != null ? new Date(airdate) : null;
  const date = rawDate !== null ? format(rawDate, 'do MMM yyyy') : '';
  const seasonAndNumber = data?.seasonAndNumber ?? '';
  const summary = data?.summary ?? '';
  const href = `/episodes/${data?.id}`;
  const watched = data?.watched === true;
  const showName = data?.tvShow?.name ?? '';
  return (
    <div className={classNames.listItem}>
      <span className={classNames.textWrapper}>
        <span className={classNames.title}>
          {[includeShowName && showName, seasonAndNumber, name, date].filter(Boolean).join(' - ')}
        </span>
        <span className={classNames.description}>{summary}</span>
      </span>
      <Box display="flex" gap="small">
        <Link href={href} passHref>
          <IconButton href={href} color="white" title="Episode details">
            <BiDetail />
          </IconButton>
        </Link>
        {isLoggedIn && (
          <IconButton
            title={watched ? 'Seen' : 'Not seen'}
            onClick={onClick}
            color={watched ? 'success' : 'danger'}
            loading={isMutating}
          >
            {watched ? <BsEye /> : <BsEyeSlash />}
          </IconButton>
        )}
      </Box>
    </div>
  );
}
