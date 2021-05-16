import TvShowQuery, { tvShowQuery } from 'tvShow/TvShowQuery';
import makeGetServerSideProps from 'services/get-serverside-props';
import { GetServerSidePropsContext } from 'next';

type Props = Readonly<{
  tvshowId: string;
}>;

export default function TvShowPage(props: Props) {
  return <TvShowQuery tvShowId={props.tvshowId} />;
}

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const id = ctx.query?.id;

  return makeGetServerSideProps({
    pageName: 'tv-show',
    relayQueryData: {
      query: tvShowQuery,
      variables: { id },
    },
    pageProps: { tvshowId: id },
  })(ctx);
};

