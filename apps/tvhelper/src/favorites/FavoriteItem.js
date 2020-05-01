// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type FragmentContainerType } from '@tbergq/relay';
import { Link } from '@tbergq/components';
import { TableRow, TableCell } from '@kiwicom/orbit-components';
import { format } from 'date-fns';

import type { FavoriteItem_favorite as Favorite } from './__generated__/FavoriteItem_favorite.graphql';

type Props = {|
  +favorite: ?Favorite,
|};

const DATE_FORMAT = 'do MMM yyyy';

const getFormattedDate = (date: ?string) => {
  if (date == null) {
    return 'Unknown';
  }
  return format(new Date(date), DATE_FORMAT);
};

const FavoriteItem = (props: Props) => {
  const id = props.favorite?.id ?? '';
  return (
    <TableRow>
      <TableCell align="left">
        <Link href={`/tvShow?id=${id}`}>{props.favorite?.name}</Link>
      </TableCell>
      <TableCell align="left">{getFormattedDate(props.favorite?.nextEpisode)}</TableCell>
      <TableCell align="left">{getFormattedDate(props.favorite?.previousEpisode)}</TableCell>
      <TableCell align="left">{props.favorite?.status}</TableCell>
    </TableRow>
  );
};

export default (createFragmentContainer(FavoriteItem, {
  favorite: graphql`
    fragment FavoriteItem_favorite on TvShow {
      name
      nextEpisode
      previousEpisode
      id
      status
    }
  `,
}): FragmentContainerType<Props, React.Node>);
