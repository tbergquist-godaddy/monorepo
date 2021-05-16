import styled, { StyledComponent } from 'styled-components';
import { space, color, layout, flexbox, position } from 'styled-system';

type MediaProp<T> = T | ReadonlyArray<T>;

interface Props {
  p: MediaProp<number>;
  py: MediaProp<number>;
  pt: MediaProp<number>;
  pl: MediaProp<number>;
  pb: MediaProp<number>;
  my: MediaProp<number>;
  mb: MediaProp<number>;
  mr: MediaProp<number>;
  display: MediaProp<string>;
  justifyContent: MediaProp<string>;
  alignItems: MediaProp<string>;
  flex: MediaProp<string>;
  flexDirection: MediaProp<string>;
  position: MediaProp<string>;
  height: MediaProp<number>;
  width: MediaProp<number>;
  gap: MediaProp<string>;
  overflow: MediaProp<string>;
}

const Box: StyledComponent<'div', any, Partial<Props>, never> = styled.div(
  { gap: ({ gap }) => gap },
  space,
  color,
  layout,
  flexbox,
  position,
);

export default Box;
