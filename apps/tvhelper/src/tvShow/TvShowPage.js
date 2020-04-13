// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type FragmentContainerType } from '@tbergq/relay';
import { Heading } from '@tbergq/components';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { TvShowPage_tvShow as TvShow } from './__generated__/TvShowPage_tvShow.graphql';
import Episodes from './episodes/Episodes';
import TvShowImage from './TvShowImage';
import TvShowLoader from './TvShowLoader';

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

const FullWidthGridItem = styled.div({
  [`@media (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    gridColumn: 'span 2',
  },
});

const NetworkWrapper = styled(FullWidthGridItem)({
  marginLeft: '16px',
});

const ImageWrapper = styled.div({
  position: 'relative',
});

type Props = {|
  +tvShow: ?TvShow,
|};

const TvShowPage = (props: Props) => {
  const name = props.tvShow?.name ?? '';
  if (props.tvShow == null) {
    return <TvShowLoader />;
  }
  return (
    <>
      <Heading element="h1">{name}</Heading>
      <GridContainer>
        <ImageWrapper>
          <TvShowImage tvShow={props.tvShow} />
        </ImageWrapper>
        <div dangerouslySetInnerHTML={{ __html: props.tvShow.summary }} />
        <NetworkWrapper>
          <strong>Network: </strong>
          {props.tvShow.network?.name}
        </NetworkWrapper>
        <FullWidthGridItem>
          <Episodes episodes={props.tvShow} />
        </FullWidthGridItem>
      </GridContainer>
    </>
  );
};

export default (createFragmentContainer(TvShowPage, {
  tvShow: graphql`
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
}): FragmentContainerType<Props, React.Node>);
