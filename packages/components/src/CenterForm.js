// @flow

import { Children, type Node, type Element } from 'react';
// $FlowFixMe[untyped-type-import] $FlowFixMe(>=<150.1>)
import styled, { type StyledComponent } from 'styled-components';

// $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
const FormGrid: StyledComponent<Props, void, HTMLDivElement> = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 80% 1fr',
  gridTemplateRows: '1fr 1fr',
  [theme.media.tablet]: {
    gridTemplateColumns: '1fr 50% 1fr',
  },
}));

const FormItem = styled.div({
  gridColumnStart: 2,
});

type Props = {
  +children: Node,
};
// $FlowFixMe[incompatible-type] $FlowFixMe(>=<150.1>)
export default function CenterForm(props: Props): Element<typeof FormGrid> {
  return (
    <FormGrid>
      {Children.map(props.children, (child) => (
        <FormItem>{child}</FormItem>
      ))}
    </FormGrid>
  );
}
