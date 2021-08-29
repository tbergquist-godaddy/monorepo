import { Box } from '@tbergq/components';
import { useFragment, graphql } from 'react-relay';
import { notSeenEpisodeListItem$key } from '__generated__/notSeenEpisodeListItem.graphql';
import Link from 'next/link';

import { classNames } from './not-seen-episode-list-item.css';

type Props = {
  episode?: notSeenEpisodeListItem$key;
};

export default function NotSeenEpisodeListItem({ episode }: Props): JSX.Element {
  const data = useFragment(
    graphql`
      fragment notSeenEpisodeListItem on Episode {
        name
        airdate
        seasonAndNumber
        tvShow {
          id
          name
        }
      }
    `,
    episode,
  );
  const href = `/tvShow/${data?.tvShow?.id}`;
  // TODO: Improve styling
  return (
    <Link href={href}>
      <Box
        display="block"
        padding="large"
        borderBottomWidth="normal"
        borderBottomStyle="solid"
        borderColor="gray"
        marginBottom="listHide"
        marginTop="listAdjust"
        as="a"
        href={href}
        color="black"
        textDecoration="none"
        className={classNames.link}
      >
        {data.seasonAndNumber} - {data.name} - <Box as="strong">{data.tvShow.name}</Box> -{' '}
        {data.airdate}
      </Box>
    </Link>
  );
}
