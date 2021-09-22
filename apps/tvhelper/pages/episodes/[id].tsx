import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { invariant } from '@adeira/js';
import Episode, { episodeQuery } from 'episode/episode';
import makeGetServerSideProps from 'services/get-serverside-props';

type Props = {
  episodeId: string;
};

export default function EpisodeId({ episodeId }: Readonly<Props>): JSX.Element {
  return <Episode episodeId={episodeId} />;
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext,
): Promise<
  GetServerSidePropsResult<{
    token: string;
    pageName: string;
    records: {
      [key: string]: Record<string, unknown>;
    };
  }>
> => {
  const id = ctx.query?.id;
  invariant(!Array.isArray(id), 'id must be a string');

  const res = await makeGetServerSideProps({
    pageName: 'episode',
    relayQueryData: {
      query: episodeQuery,
      variables: { id },
    },
    pageProps: { episodeId: id },
  })(ctx);

  return {
    ...res,
    props: {
      ...res.props,
    },
  };
};
