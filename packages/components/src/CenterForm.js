// @flow

import * as React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const FormGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 80% 1fr',
  gridTemplateRows: '1fr 1fr',
  [`@media (min-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    gridTemplateColumns: '1fr 50% 1fr',
  },
});

const FormItem = styled.div({
  gridColumnStart: 2,
});

type Props = {|
  +children: React.Node,
|};
export default function CenterForm(props: Props) {
  return (
    <FormGrid>
      {React.Children.map(props.children, child => (
        <FormItem>{child}</FormItem>
      ))}
    </FormGrid>
  );
}
