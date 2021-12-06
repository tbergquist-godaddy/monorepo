import { GetServerSidePropsContext } from 'next';
import { fetchQuery, GraphQLTaggedNode } from 'react-relay';
import cookies from 'next-cookies';
import { TOKEN_KEY } from 'environment';

import { createEnvironment, makeFetchQuery } from './relay';

const { GRAPHQL_URL } = process.env;

const fetchData = ({ environment, query, variables }) =>
  new Promise((resolve, reject) => {
    fetchQuery(environment, query, variables).subscribe({
      complete: () => resolve(null),
      error: (error) => reject(error),
    });
  });

type Props = Readonly<{
  relayQueryData?: Readonly<{
    query: GraphQLTaggedNode;
    variables: Record<string, unknown>;
  }>;
  pageProps?: Record<string, unknown>;
  isSecure?: boolean;
  pageName: string;
}>;

export default function makeGetInitialProps({
  relayQueryData,
  pageProps,
  pageName,
  isSecure = false,
}: Props) {
  return async function getInitialProps(ctx: GetServerSidePropsContext) {
    const serverCookies = cookies(ctx);
    const token: string | null = serverCookies[TOKEN_KEY] ?? null;

    if (isSecure && !token) {
      const res = ctx.res;
      res.writeHead(302, { Location: '/login' });
      res.end();
    }

    const environment = createEnvironment({
      fetchQuery: makeFetchQuery(token, GRAPHQL_URL),
    });

    if (relayQueryData) {
      await fetchData({ ...relayQueryData, environment });
    }

    return {
      props: {
        token,
        pageName,
        records: environment.getStore().getSource().toJSON(),
        ...pageProps,
      },
    };
  };
}
