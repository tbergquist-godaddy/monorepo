import TvShowQuery, { tvShowQuery } from 'tvShow/TvShowQuery';
import makeGetServerSideProps from 'services/get-serverside-props';
import { GetServerSidePropsContext } from 'next';

type Props = Readonly<{
  tvshowId: string;
}>;

export default function TvShowPage(props: Props) {
  return <TvShowQuery tvShowId={props.tvshowId} />;
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const id = ctx.query?.id;

  const res = await makeGetServerSideProps({
    pageName: 'tv-show',
    relayQueryData: {
      query: tvShowQuery,
      variables: { id },
    },
    pageProps: { tvshowId: id },
  })(ctx);

  // @ts-ignore: this exists
  const pageName = res.props.records[id]?.name ?? res.props.pageName;

  return {
    ...res,
    props: {
      ...res.props,
      pageName,
    },
  };
};
