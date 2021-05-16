import { graphql, useFragment } from 'react-relay';
import { Heading, Container } from '@tbergq/components';
import { TvShowPage_tvShow$key as TvShow } from '__generated__/TvShowPage_tvShow.graphql';
import Box from 'components/Box';

import Episodes from './episodes/Episodes';
import TvShowImage from './TvShowImage';

type Props = Readonly<{
  tvShow: TvShow;
}>;

const TvShowPage = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment TvShowPage_tvShow on TvShow {
        name
        network {
          name
        }
        summary(stripTags: false)
        ...TvShowImage_tvShow
        ...Episodes_episodes
      }
    `,
    props.tvShow,
  );

  const name = data?.name ?? '';

  return (
    <Container>
      <Box pt={8}>
        <Heading>{name}</Heading>
        <Box display="flex" py={8} gap="16px" flexDirection={['column', 'column', 'row']}>
          <Box position="relative">
            <TvShowImage tvShow={data} />
          </Box>
          <Box flex="1" dangerouslySetInnerHTML={{ __html: data.summary }} />
        </Box>
        <Box pl={24} pb={8}>
          <strong>Network: </strong>
          {data.network?.name}
        </Box>
        <Episodes episodes={data} />
      </Box>
    </Container>
  );
};

export default TvShowPage;
