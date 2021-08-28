import makeGetServerSideProps from 'services/get-serverside-props';

import NotSeenEpisodes, { notSeenEpisodesQuery } from '../../src/episodes/not-seen-episodes';

export default function Episodes(): JSX.Element {
  return <NotSeenEpisodes />;
}

export const getServerSideProps = makeGetServerSideProps({
  relayQueryData: {
    query: notSeenEpisodesQuery,
    variables: {},
  },
  pageName: 'episodes',
  isSecure: true,
});
