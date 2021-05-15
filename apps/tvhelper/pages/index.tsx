import makeGetServerSideProps from 'services/get-serverside-props';
import SearchScene from 'search/SearchScene';
import { searchQuery } from 'search/SearchQuery';

type Props = {
  query: string;
  token: string;
};

export default function Index({ query, token }: Props) {
  return <SearchScene query={query} token={token} />;
}

export const getServerSideProps = (ctx) => {
  const query = ctx.query?.query ?? null;

  return makeGetServerSideProps({
    relayQueryData: !query
      ? null
      : {
          query: searchQuery,
          variables: { query },
        },
    pageName: 'home',
    pageProps: {
      query,
    },
  })(ctx);
};
