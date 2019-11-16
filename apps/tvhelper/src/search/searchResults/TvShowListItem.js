// @flow

import * as React from 'react';
import {
  graphql,
  createFragmentContainer,
  type RelayProp,
  type RelayEnvironmentType,
} from '@tbergq/relay';
import styled from 'styled-components';

import type { TvShowListItem_data as TvShow } from './__generated__/TvShowListItem_data.graphql';

const borderRadius = 4;

const TvShowButton = styled.button({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

const Container = styled.div`
  height: 100%;
  margin-bottom: 8px;
  background-color: #cccccc;
  border-radius: ${borderRadius}px;
  position: relative;
  background-image: url(${props => props.url});
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
});

const StyledText = styled.div({
  paddingTop: '5px',
  color: '#ffffff',
  fontSize: '16px',
});

type NavigationOptions = {|
  +id: ?string,
  +name: ?string,
  +environment: RelayEnvironmentType,
|};

type Props = {|
  +data: ?TvShow,
  +onPress: NavigationOptions => void,
  +relay: RelayProp,
  +width?: number,
|};

function TvShowListItem(props: Props) {
  const status = props.data?.status ?? '';
  const name = props.data?.name ?? '';
  const rating = props.data?.rating ?? '';

  const onClick = () => {
    props.onPress({
      id: props.data?.id,
      name,
      environment: props.relay.environment,
    });
  };

  return (
    <TvShowButton onClick={onClick}>
      <Container url={props.data?.image?.medium}>
        <BottomSheet>
          <StyledText>{`${name} - ${rating}`}</StyledText>
          <StyledText>{status}</StyledText>
        </BottomSheet>
      </Container>
    </TvShowButton>
  );
}

export default createFragmentContainer(TvShowListItem, {
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
});
