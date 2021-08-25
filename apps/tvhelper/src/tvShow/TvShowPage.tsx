import { graphql, useFragment } from 'react-relay';
import { Heading, Container, Box } from '@tbergq/components';
import { TvShowPage_tvShow$key as TvShowType } from '__generated__/TvShowPage_tvShow.graphql';

import Episodes from './episodes/Episodes';
import TvShowImage from './TvShowImage';
import { classNames } from './TvShowPage.css';

type Props = Readonly<{
  tvShow: TvShowType;
}>;

const TvShowPage = (props: Props): JSX.Element => {
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
      <Box paddingTop="xxxLarge">
        <Heading>{name}</Heading>
        <Box
          display="flex"
          paddingY="xxxLarge"
          gap="increased"
          flexDirection={{
            mediumMobile: 'column',
            tablet: 'row',
          }}
        >
          <Box position="relative" className={classNames.imageContainer}>
            <TvShowImage tvShow={data} />
          </Box>
          <Box flex="1" dangerouslySetInnerHTML={{ __html: data.summary }} />
        </Box>
        <Box paddingLeft="xxxLarge" paddingBottom="xxxLarge">
          <strong>Network: </strong>
          {data.network?.name}
        </Box>
        <Episodes episodes={data} />
      </Box>
    </Container>
  );
};

export default TvShowPage;
