import { ReactNode } from 'react';
import { Environment, Network, RecordSource, Store, FetchFunction } from 'relay-runtime';
import { RelayEnvironmentProvider } from 'react-relay';
import { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes';

interface Props {
  readonly children: ReactNode;
  readonly records?: RecordMap;
  readonly token: string | undefined;
}

interface CreateEnvironmentArgs {
  fetchQuery: FetchFunction;
  records?: RecordMap;
}
export const createEnvironment = ({ fetchQuery, records }: CreateEnvironmentArgs) => {
  const network = Network.create(fetchQuery);

  const store = new Store(new RecordSource(records));

  return new Environment({
    network,
    store,
  });
};

const { GRAPHQL_URL } = process.env;

const getBody = (operation, variables) => {
  if (operation.id) {
    return {
      queryId: operation.id,
      variables,
    };
  }
  return {
    query: operation.text,
    variables,
  };
};

export const makeFetchQuery = (token, baseUrl = '') => {
  const fetchQuery = async (operation, variables /* , cacheConfig, uploadables */) => {
    const res = await fetch(`${baseUrl}`, {
      method: 'POST',
      headers: {
        // Add authentication and other headers here
        'content-type': 'application/json',
        'authorization': token,
      },
      body: JSON.stringify(getBody(operation, variables)),
    });
    return res.json();
  };
  return fetchQuery;
};

const EnvironmentProvider = ({ children, records, token }: Props) => {
  const environment = createEnvironment({
    fetchQuery: makeFetchQuery(token, GRAPHQL_URL),
    records,
  });

  return <RelayEnvironmentProvider environment={environment}>{children}</RelayEnvironmentProvider>;
};

export { EnvironmentProvider };
