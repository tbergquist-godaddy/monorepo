import { Button, Box, Link } from '@tbergq/components';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useRouter } from 'next/router';
import { graphql, useFragment } from 'react-relay';
import { actionBar$key } from '__generated__/actionBar.graphql';
import { Maybe } from 'types';
import NextLink from 'next/link';

import { Actions } from '../models/use-episode';
import WatchedDate from './watched-date';

type Props = {
  dataRef: actionBar$key;
  actions: Actions;
  isMutating: Maybe<boolean>;
};

export default function ActionBar({
  dataRef,
  actions: { toggleEpisodeWatched },
  isMutating,
}: Readonly<Props>): JSX.Element {
  const data = useFragment(
    graphql`
      fragment actionBar on Episode {
        watched
        tvShow {
          id
          name
        }
        ...watchedDate
      }
    `,
    dataRef,
  );
  const isWatched = data?.watched === true;
  const { back } = useRouter();
  const { id, name } = data?.tvShow ?? {};
  const href = `/tvShow/${id}`;

  return (
    <Box display="flex" gap="normal" alignItems="center">
      <Button onClick={() => back()} color="secondary">
        Back
      </Button>
      <NextLink href={href}>
        <Link href={href}>{name}</Link>
      </NextLink>
      <Button
        loading={isMutating}
        ariaLabel={isWatched ? 'Mark as not watched' : 'Mark as watched'}
        onClick={toggleEpisodeWatched}
        color={isWatched ? 'danger' : 'success'}
      >
        {isWatched ? <MdVisibilityOff /> : <MdVisibility />}
      </Button>
      <WatchedDate dataRef={data} isMutating={isMutating} />
    </Box>
  );
}
