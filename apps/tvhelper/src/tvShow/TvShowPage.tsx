import { graphql, useFragment } from 'react-relay';
import { Heading, Container, Box } from '@tbergq/components';
import { TvShowPage_tvShow$key as TvShowType } from '__generated__/TvShowPage_tvShow.graphql';
import ImageSummary from 'components/image-summary/image-summary';

import Episodes from './episodes/Episodes';
import ToggleFavoriteButton from './toggle-favorite-button';

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
        ...toggleFavoriteButton
        ...Episodes_episodes
        ...imageSummary
      }
    `,
    props.tvShow,
  );

  const name = data?.name ?? '';

  return (
    <Container>
      <Box paddingTop="xxxLarge">
        <Heading>{name}</Heading>

        <Box paddingY="xxxLarge">
          <Box position="relative">
            <ImageSummary alt={data?.name ?? ''} dataRef={data} />
            <ToggleFavoriteButton tvShow={data} />
          </Box>
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
