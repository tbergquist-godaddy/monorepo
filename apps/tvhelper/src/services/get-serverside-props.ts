import { GetServerSidePropsContext } from 'next';
import { createEnvironment, makeFetchQuery } from './relay';
import { fetchQuery, GraphQLTaggedNode } from 'react-relay';
import cookies from 'next-cookies';
import { TOKEN_KEY } from '@tbergq/utils';

const { GRAPHQL_URL } = process.env;

const fetchData = ({ environment, query, variables }) =>
  new Promise((resolve, reject) => {
    fetchQuery(environment, query, variables).subscribe({
      complete: () => resolve(null),
      error: (error) => reject(error),
    });
  });

interface Props {
  readonly relayQueryData?: Readonly<{
    query: GraphQLTaggedNode;
    variables: Record<string, unknown>;
  }>;
  readonly pageProps?: Record<string, unknown>;
  readonly pageName: string;
}

export default function makeGetInitialProps({ relayQueryData, pageProps, pageName }: Props) {
  return async function getInitialProps(ctx: GetServerSidePropsContext) {
    const serverCookies = cookies(ctx);
    const token = serverCookies[TOKEN_KEY];
    
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
