// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { Heading } from '@tbergq/components';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { TvShowPage_tvShow as TvShow } from './__generated__/TvShowPage_tvShow.graphql';
import Episodes from './episodes/Episodes';
import TvShowImage from './TvShowImage';

const GridContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '16px',
  gridRowGap: '16px',
  [`@media (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    gridTemplateColumns: '1fr 1fr',
  },
});

const EpisodeGridItem = styled.div({
  [`@media (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    gridColumn: 'span 2',
  },
});

type Props = {|
  +tvShow: ?TvShow,
|};

const TvShowPage = (props: Props) => {
  const name = props.tvShow?.name ?? '';
  return (
    <>
      <Heading>{name}</Heading>
      <GridContainer>
        <TvShowImage tvShow={props.tvShow} />
        <div dangerouslySetInnerHTML={{ __html: props.tvShow?.summary }} />
        <EpisodeGridItem>
          <Episodes episodes={props.tvShow} />
        </EpisodeGridItem>
      </GridContainer>
    </>
  );
};

export default createFragmentContainer(TvShowPage, {
  tvShow: graphql`
    fragment TvShowPage_tvShow on TvShow {
      name
      summary(stripTags: false)
      ...TvShowImage_tvShow
      ...Episodes_episodes
    }
  `,
});
