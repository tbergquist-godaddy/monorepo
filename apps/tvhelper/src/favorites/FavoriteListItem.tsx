import { graphql, useFragment } from 'react-relay';
import Link from 'next/link';
import { format, isValid, parseISO } from 'date-fns';
import { FavoriteListItem_favorite$key as Favorite } from '__generated__/FavoriteListItem_favorite.graphql';
import { ReactNode } from 'react';
import Image from 'next/image';
import { Box } from '@tbergq/components';

import { classNames } from './FavoriteListItem.css';

type Props = Readonly<{
  favorite: Favorite;
}>;

const DATE_FORMAT = 'do MMM yyyy';

const sanitizeUnknownDate = (date: unknown) => {
  if (typeof date === 'string') {
    return date;
  }
  return null;
};

const getFormattedDate = (date: string | null) => {
  if (date == null || !isValid(parseISO(date))) {
    return 'Unknown';
  }
  return format(new Date(date), DATE_FORMAT);
};

const FavoriteItem = (props: { label: string; children: ReactNode; flex?: string }) => (
  <Box flex={1} marginBottom="normal">
    <div className={classNames.label}>{props.label}</div>
    {props.children}
  </Box>
);

const FavoriteListItem = (props: Props): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment FavoriteListItem_favorite on TvShow {
        name
        nextEpisode
        previousEpisode
        id
        status
        image {
          medium
        }
      }
    `,
    props.favorite,
  );
  const id = data?.id ?? '';
  const name = data?.name ?? '';
  const src = data?.image?.medium;

  return (
    <Link href={`/tvShow/${id}`}>
      <a className={classNames.listItem} href={`/tvShow/${id}`}>
        <Box display="flex" alignItems="center">
          <Box marginRight="xxxLarge">
            {src ? (
              <Image
                className={classNames.image}
                height={50}
                width={50}
                src={data?.image?.medium}
                alt={name}
              />
            ) : (
              <div className={classNames.imageFallback} />
            )}
          </Box>
          <Box
            flex="1"
            display={{
              mediumMobile: 'block',
              tablet: 'flex',
            }}
            marginBottom="negativeNormal"
          >
            <FavoriteItem label="Name">{name}</FavoriteItem>
            <FavoriteItem label="Status">{data?.status ?? ''}</FavoriteItem>
            <Box flex="2" display="flex" justifyContent="flex-start">
              <FavoriteItem label="Previous episode">
                {getFormattedDate(sanitizeUnknownDate(data?.previousEpisode))}
              </FavoriteItem>
              <FavoriteItem label="Next episode">
                {getFormattedDate(sanitizeUnknownDate(data?.nextEpisode))}
              </FavoriteItem>
            </Box>
          </Box>
        </Box>
      </a>
    </Link>
  );
};

export default FavoriteListItem;
