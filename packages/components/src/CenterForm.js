// @flow

import { Children, type Node, type Element } from 'react';
import styled, { type StyledComponent } from 'styled-components';

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
export default function CenterForm(props: Props): Element<typeof FormGrid> {
  return (
    <FormGrid>
      {Children.map(props.children, (child) => (
        <FormItem>{child}</FormItem>
      ))}
    </FormGrid>
  );
}
