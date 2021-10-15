import { graphql, useFragment } from 'react-relay';
import { watchedDate$key } from '__generated__/watchedDate.graphql';
import { Maybe } from 'types';
import { format } from 'date-fns';

type Props = {
  dataRef: watchedDate$key;
  isMutating: Maybe<boolean>;
};

export default function WatchedDate({ dataRef, isMutating }: Readonly<Props>): JSX.Element {
  const data = useFragment(
    graphql`
      fragment watchedDate on Episode {
        watchedDate
        watched
      }
    `,
    dataRef,
  );
  const isWatched = data?.watched === true;
  const watchedDate = data?.watchedDate;

  const watchedText = (() => {
    if (isMutating) {
      return 'Loading...';
    }
    if (!isWatched) {
      return 'Not yet seen';
    }

    if (typeof watchedDate !== 'string') {
      return null;
    }
    return `Seen ${format(new Date(watchedDate), 'PP')}`;
  })();

  return <p>{watchedText}</p>;
}
