// @flow

import * as React from 'react';
import styled from 'styled-components';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
|};

const Button = styled.button({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export default function TvShowButton(props: Props) {
  return (
    <Button onClick={props.onPress} type="button" data-testid="tvShowButton">
      {props.children}
    </Button>
  );
}
