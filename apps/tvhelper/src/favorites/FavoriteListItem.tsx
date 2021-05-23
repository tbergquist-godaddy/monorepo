import { graphql, useFragment } from 'react-relay';
import Link from 'next/link';
import { format, isValid, parseISO } from 'date-fns';
import styled from 'styled-components';
import { FavoriteListItem_favorite$key as Favorite } from '__generated__/FavoriteListItem_favorite.graphql';
import { ReactNode } from 'react';
import Image from 'next/image';
import Box from 'components/Box';

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

const ListItem = styled.a(({ theme }) => ({
  'display': 'block',
  'borderBottom': `1px solid ${theme.gray}`,
  'padding': `${theme.spacing.normal} 0`,
  'marginBottom': '-1px',
  'marginTop': '1px',
  'textDecoration': 'none',
  'color': theme.black,
  ':focus, :hover': {
    backgroundColor: theme.gray,
    opacity: 0.8,
    outline: 'none',
  },
}));

const StyledImage = styled(Image)(({ theme }) => ({
  marginRight: theme.spacing.large,
  objectFit: 'cover',
  borderRadius: '50%',
}));

const Label = styled.div(({ theme }) => {
  return {
    fontSize: theme.fontSize.small,
    color: theme.secondary,
  };
});

const FavoriteItem = (props: { label: string; children: ReactNode; flex?: string }) => (
  <Box flex={props.flex ?? '1'} mb={2}>
    <Label>{props.label}</Label>
    {props.children}
  </Box>
);

const FavoriteListItem = (props: Props) => {
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
  return (
    <Link href={`/tvShow?id=${id}`}>
      <ListItem href={`/tvShow?id=${id}`}>
        <Box display="flex" alignItems="center">
          <Box mr={8}>
            <StyledImage height={50} width={50} src={data?.image?.medium} alt={name} />
          </Box>
          <Box flex="1" display={['block', 'block', 'flex']} mb={-2}>
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
      </ListItem>
    </Link>
  );
};

export default FavoriteListItem;
