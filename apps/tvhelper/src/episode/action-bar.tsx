import { Button, Box } from '@tbergq/components';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useRouter } from 'next/router';
import useToggleWatched from 'commands/use-toggle-watched';
import { graphql, useFragment } from 'react-relay';
import { actionBar$key } from '__generated__/actionBar.graphql';

type Props = {
  dataRef: actionBar$key;
};

export default function ActionBar({ dataRef }: Readonly<Props>): JSX.Element {
  const data = useFragment(
    graphql`
      fragment actionBar on Episode {
        watched
        ...useToggleWatched
      }
    `,
    dataRef,
  );
  const isWatched = data?.watched === true;
  const [toggleWatched, loading] = useToggleWatched(data);
  const { back } = useRouter();

  const watchedText = (() => {
    if (loading) {
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
        loading={loading}
        ariaLabel={isWatched ? 'Mark as not watched' : 'Mark as watched'}
        onClick={toggleWatched}
        color={isWatched ? 'danger' : 'success'}
      >
        {isWatched ? <MdVisibilityOff /> : <MdVisibility />}
      </Button>
      <div>{watchedText}</div>
    </Box>
  );
}
