import styled, { StyledComponent } from 'styled-components';
import { space, color, layout, flexbox, position } from 'styled-system';

type MediaProp<T> = T | ReadonlyArray<T>;

interface Props {
  py: MediaProp<number>;
  pt: MediaProp<number>;
  my: MediaProp<number>;
  mb: MediaProp<number>;
  mr: MediaProp<number>;
  display: MediaProp<string>;
  justifyContent: MediaProp<string>;
  alignItems: MediaProp<string>;
  flex: MediaProp<string>;
  position: MediaProp<string>;
  height: MediaProp<number>;
  width: MediaProp<number>;
}

const Box: StyledComponent<'div', any, Partial<Props>, never> = styled.div(
  {},
  space,
  color,
  layout,
  flexbox,
  position,
);

export default Box;
