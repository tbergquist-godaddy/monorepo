// @flow strict-local

import type { Node } from 'react';
import { graphql, createFragmentContainer, type FragmentContainerType } from '@tbergq/relay';
import { Link, Media } from '@tbergq/components';
import { format, isValid, parseISO } from 'date-fns';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
import styled from 'styled-components';

import type { FavoriteListItem_favorite as Favorite } from '__generated__/FavoriteListItem_favorite.graphql';

type Props = {
  +favorite: ?Favorite,
};

const DATE_FORMAT = 'do MMM yyyy';

const getFormattedDate = (date: ?string) => {
  if (date == null || !isValid(parseISO(date))) {
    return 'Unknown';
  }
  return format(new Date(date), DATE_FORMAT);
};

const ListItem = styled(Link)(({ theme }) => ({
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

const Container = styled.div(({ theme }) => ({
  'padding': `0 ${theme.spacing.normal}`,
  'display': 'flex',
  'alignItems': 'center',
  '& > *': {
    'marginRight': theme.spacing.large,
    '&:last-child': {
      margin: '0',
    },
  },
}));

const Image = styled.img(({ theme }) => ({
  height: '50px',
  width: '50px',
  marginRight: theme.spacing.large,
}));

const Label = styled.div(({ theme }) => ({
  fontSize: theme.fontSize.small,
  color: theme.secondary,
}));

const FlexItem = styled.div({
  flex: 1,
});

const FavoriteItem = (props: { +label: string, +children: Node }) => (
  <FlexItem>
    <Label>{props.label}</Label>
    {props.children}
  </FlexItem>
);

const FavoriteListItem = (props: Props) => {
  const id = props.favorite?.id ?? '';
  const name = props.favorite?.name ?? '';
  return (
    <ListItem href={`/tvShow?id=${id}`}>
      <Container>
        <Media greaterThan="smallMobile">
          <Image src={props.favorite?.image?.medium} alt={name} />
        </Media>
        <FavoriteItem label="Name">{name}</FavoriteItem>
        <FavoriteItem label="Next episode">
          {getFormattedDate(props.favorite?.nextEpisode)}
        </FavoriteItem>
        <FavoriteItem label="Previous episode">
          {getFormattedDate(props.favorite?.previousEpisode)}
        </FavoriteItem>
        <FavoriteItem label="Status">{props.favorite?.status ?? ''}</FavoriteItem>
      </Container>
    </ListItem>
  );
};

export default (createFragmentContainer(FavoriteListItem, {
  favorite: graphql`
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
}): FragmentContainerType<Props, Node>);
