import { Button, Box } from '@tbergq/components';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useRouter } from 'next/router';
import { graphql, useFragment } from 'react-relay';
import { actionBar$key } from '__generated__/actionBar.graphql';
import { Maybe } from 'types';

import { Actions } from '../models/use-episode';

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
      }
    `,
    dataRef,
  );
  const isWatched = data?.watched === true;
  const { back } = useRouter();

  const watchedText = (() => {
    if (isMutating) {
      return 'Loading...';
    }
    return isWatched ? `Seen at TODO` : 'not yet seen';
  })();

  return (
    <Box display="flex" gap="normal" alignItems="center">
      <Button onClick={() => back()} color="secondary">
        Back
      </Button>
      <Button
        loading={isMutating}
        ariaLabel={isWatched ? 'Mark as not watched' : 'Mark as watched'}
        onClick={toggleEpisodeWatched}
        color={isWatched ? 'danger' : 'success'}
      >
        {isWatched ? <MdVisibilityOff /> : <MdVisibility />}
      </Button>
      <div>{watchedText}</div>
    </Box>
  );
}
