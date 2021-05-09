// @flow strict-local

import type { Node } from 'react';
import { graphql, createFragmentContainer, type FragmentContainerType } from '@tbergq/relay';
import styled from 'styled-components';
import { Link } from '@tbergq/components';

import type { TvShowListItem_data as TvShow } from './__generated__/TvShowListItem_data.graphql';

const borderRadius = 4;

const StyledLink = styled(Link)({
  'outline': 'none',
  ':focus, :hover': {
    transform: ' scale(1.05)',
    transition: 'all 0.2s ease-in',
  },
});

const Container = styled.div`
  height: 100%;
  margin-bottom: 8px;
  background-color: #cccccc;
  border-radius: ${borderRadius}px;
  position: relative;
  background: url(${(props) => props.url}) no-repeat;
  background-size: cover;
`;

const BottomSheet = styled.div({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#000000',
  opacity: 0.7,
  minHeight: '50px',
  borderBottomLeftRadius: `${borderRadius}px`,
  borderBottomRightRadius: `${borderRadius}px`,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const StyledText = styled.div({
  paddingTop: '5px',
  color: '#ffffff',
  fontSize: '16px',
});

type Props = {
  +data: ?TvShow,
  +width?: number,
};

function TvShowListItem(props: Props) {
  const status = props.data?.status ?? '';
  const name = props.data?.name ?? '';
  const rating = props.data?.rating ?? '';
  const tvShowId = props.data?.id;

  if (tvShowId == null) {
    return null;
  }
  return (
    <StyledLink href={`/tvShow?id=${tvShowId}`}>
      <Container url={props.data?.image?.medium}>
        <BottomSheet>
          <StyledText>{`${name} - ${rating}`}</StyledText>
          <StyledText>{status}</StyledText>
        </BottomSheet>
      </Container>
    </StyledLink>
  );
}

export default (createFragmentContainer(TvShowListItem, {
  data: graphql`
    fragment TvShowListItem_data on TvShow {
      id
      name
      status
      rating
      image {
        medium
      }
    }
  `,
}): FragmentContainerType<Props, Node>);
