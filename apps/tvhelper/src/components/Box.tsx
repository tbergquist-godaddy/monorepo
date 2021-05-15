import styled, { StyledComponent } from 'styled-components';
import { space, color, layout, flexbox } from 'styled-system';

interface Props {
  py: number;
  display: string;
  justifyContent: string;
}

const Box: StyledComponent<'div', any, Partial<Props>, never> = styled.div(
  {},
  space,
  color,
  layout,
  flexbox,
);

export default Box;
