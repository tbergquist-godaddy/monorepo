// @flow

import * as React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const SelectItem = styled.div({
  borderTop: `1px solid ${defaultTokens.borderColorTableCell}`,
  padding: defaultTokens.spaceSmall,
  ':hover': {
    backgroundColor: defaultTokens.paletteCloudNormalHover,
    cursor: 'pointer',
  },
});

type Props = {|
  +id: string,
  +name: string,
  +onClick: Function,
|};

export default function AutoComplete({ onClick, id, name }: Props) {
  const onSelect = React.useCallback(() => {
    onClick(id);
  }, [id, onClick]);
  return (
    <SelectItem role="button" onClick={onSelect}>
      {name}
    </SelectItem>
  );
}
