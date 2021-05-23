import styled, { StyledComponent } from 'styled-components';
import { space, color, layout, flexbox, position, background } from 'styled-system';

type MediaProp<T> = T | ReadonlyArray<T>;

interface Props {
  p: MediaProp<number>;
  py: MediaProp<number>;
  pt: MediaProp<number>;
  pl: MediaProp<number>;
  pb: MediaProp<number>;
  my: MediaProp<number>;
  mx: MediaProp<number | string>;
  mb: MediaProp<number>;
  mr: MediaProp<number>;
  display: MediaProp<string>;
  justifyContent: MediaProp<string>;
  alignItems: MediaProp<string>;
  flex: MediaProp<string>;
  flexDirection: MediaProp<string>;
  position: MediaProp<string>;
  height: MediaProp<number | string>;
  width: MediaProp<number | string>;
  gap: MediaProp<string>;
  overflow: MediaProp<string>;
  backgroundColor: MediaProp<string>;
}

const Box: StyledComponent<'div', any, Partial<Props>, never> = styled.div(
  // @ts-ignore: gap is a valid css prop
  { gap: ({ gap }) => gap },
  space,
  color,
  layout,
  flexbox,
  position,
  background,
);

export default Box;
