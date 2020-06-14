// @flow strict

import * as React from 'react';
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

type SpaceAfter = 'normal';
type Justify = 'flex-end' | 'space-between' | 'center';
type Align = 'center';
type Props = {
  +children: React.Node,
  +flex?: boolean,
  +dataTest?: string,
  +spaceAfter?: SpaceAfter,
  +justify?: Justify,
  +align?: Align,
};

export default function Stack({
  children,
  flex = false,
  dataTest,
  spaceAfter,
  justify,
  align,
}: Props): React.Element<typeof StyledStack> {
  return (
    <StyledStack
      justifyContent={justify}
      spaceAfter={spaceAfter}
      dataTest={dataTest}
      hasFlex={flex}
      alignItems={align}
    >
      {children}
    </StyledStack>
  );
}

type StyledProps = {
  +children: React.Node,
  +hasFlex: boolean,
  +dataTest?: string,
  +spaceAfter?: SpaceAfter,
  +justifyContent?: Justify,
  +alignItems?: Align,
};

type StackStyles = {
  +display: 'flex' | 'block',
  +width: string,
  +marginBottom?: string,
  justifyContent?: Justify,
  alignItems?: Align,
  +'& > *': $ReadOnly<{
    +marginRight?: string,
    +marginBottom?: string,
    '&:last-child': {
      +margin: string,
    },
  }>,
};

const StyledStack: StyledComponent<StyledProps, DefaultTheme, HTMLDivElement> = styled.div.attrs(
  ({ dataTest }) => ({
    'data-test': dataTest,
  }),
)(({ theme, hasFlex, spaceAfter, justifyContent, alignItems }) => {
  const styles: StackStyles = {
    display: hasFlex ? 'flex' : 'block',
    width: '100%',
    ...(spaceAfter ? { marginBottom: theme.spacing[spaceAfter] } : null),
    '& > *': {
      ...(hasFlex
        ? {
            marginRight: `${theme.spacing.normal} !important`,
          }
        : {
            marginBottom: `${theme.spacing.normal} !important`,
          }),
      '&:last-child': {
        margin: '0 !important',
      },
    },
  };
  if (justifyContent != null) {
    styles.justifyContent = justifyContent;
  }
  if (alignItems != null) {
    styles.alignItems = alignItems;
  }
  return styles;
});
