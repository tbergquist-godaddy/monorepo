// @flow

import type { ComponentType } from 'react';
import type { Context } from 'next';

import TvShowQuery, { tvShowQuery } from '../src/tvShow/TvShowQuery';

type Props = {
  +tvshowId: string,
};

function TvShowPage(props: Props) {
  return <TvShowQuery tvShowId={props.tvshowId} />;
}

TvShowPage.getInitialProps = (ctx: Context) => {
  const id = ctx.query?.id;
  return {
    query: tvShowQuery,
    variables: { id },
    tvshowId: id ?? '',
  };
};

export default (TvShowPage: ComponentType<Props>);
