// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { TableRow, TableCell } from '@tbergq/tvhelper-components';
import Link from 'next/link';
import format from 'date-fns/format';

import type { FavoriteItem_favorite as Favorite } from './__generated__/FavoriteItem_favorite.graphql';

type Props = {|
  +favorite: ?Favorite,
|};

const DATE_FORMAT = 'Do MMM YYYY';

const getFormattedDate = (date: ?string) => {
  if (date == null) {
    return 'Unknown';
  }
  return format(date, DATE_FORMAT);
};

const FavoriteItem = (props: Props) => {
  const id = props.favorite?.id ?? '';
  return (
    <TableRow>
      <TableCell align="left">
        <Link href={`/tvShow?id=${id}`}>
          <a href={`/tvShow?id=${id}`}>{props.favorite?.name}</a>
        </Link>
      </TableCell>
      <TableCell align="left">
        {getFormattedDate(props.favorite?.nextEpisode)}
      </TableCell>
      <TableCell>{getFormattedDate(props.favorite?.previousEpisode)}</TableCell>
      <TableCell>{props.favorite?.status}</TableCell>
    </TableRow>
  );
};

export default createFragmentContainer(FavoriteItem, {
  favorite: graphql`
    fragment FavoriteItem_favorite on TvShow {
      name
      nextEpisode
      previousEpisode
      id
      status
    }
  `,
});
