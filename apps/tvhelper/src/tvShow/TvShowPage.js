// @flow

import type { Node } from 'react';
import { graphql, createFragmentContainer, type FragmentContainerType } from '@tbergq/relay';
import { Heading } from '@tbergq/components';
import styled from 'styled-components';

import type { TvShowPage_tvShow as TvShow } from './__generated__/TvShowPage_tvShow.graphql';
import Episodes from './episodes/Episodes';
import TvShowImage from './TvShowImage';
import TvShowLoader from './TvShowLoader';

const NetworkWrapper = styled.div({
  paddingLeft: '24px',
});

const ImageWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  marginBottom: '16px',
  [theme.media.largeMobile]: {
    marginRight: '16px',
    marginBottom: '0',
  },
  [theme.media.tablet]: {
    marginRight: '32px',
  },
}));

const FlexContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.media.largeMobile]: {
    flexDirection: 'row',
  },
}));

const SummaryContainer = styled.div({
  flex: 1,
});

type Props = {
  +tvShow: ?TvShow,
};

const TvShowPage = (props: Props) => {
  const name = props.tvShow?.name ?? '';
  if (props.tvShow == null) {
    return <TvShowLoader />;
  }
  return (
    <>
      <Heading>{name}</Heading>
      <FlexContainer>
        <ImageWrapper>
          <TvShowImage tvShow={props.tvShow} />
        </ImageWrapper>
        <SummaryContainer dangerouslySetInnerHTML={{ __html: props.tvShow.summary }} />
      </FlexContainer>
      <NetworkWrapper>
        <strong>Network: </strong>
        {props.tvShow.network?.name}
      </NetworkWrapper>
      <Episodes episodes={props.tvShow} />
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
}): FragmentContainerType<Props, Node>);
