import { graphql, useLazyLoadQuery } from 'react-relay';
import { TvShowQuery as TvShowQueryType } from '__generated__/TvShowQuery.graphql';

import TvShowPage from './TvShowPage';

type Props = Readonly<{
  tvShowId: string;
}>;

export const tvShowQuery = graphql`
  query TvShowQuery($id: ID!) {
    node(id: $id) {
      ...TvShowPage_tvShow
    }
  }
`;

export default function TvShowQuery(props: Props) {
  const data = useLazyLoadQuery<TvShowQueryType>(
    tvShowQuery,
    { id: props.tvShowId },
    { fetchPolicy: 'store-or-network' },
  );

  return <TvShowPage tvShow={data?.node} />;
}
