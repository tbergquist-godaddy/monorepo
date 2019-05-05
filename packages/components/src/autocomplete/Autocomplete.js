// @flow

import * as React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Input from '../Input';
import AutocompleteItem from './AutocompleteItem';

const SelectWrapper = styled.div(props => ({
  position: 'absolute',
  maxHeight: props.open ? '500px' : 0,
  top: '100%',
  left: 0,
  right: 0,
  zIndex: defaultTokens.zIndexSticky,
  backgroundColor: defaultTokens.paletteCloudNormal,
  borderRadius: defaultTokens.borderRadiusNormal,
  transition: 'all 0.3s ease-in-out',
  overflow: 'scroll',
}));

const Container = styled.div({
  position: 'relative',
});

type Props = {|
  +values: $ReadOnlyArray<{| +id: string, +name: string |}>,
  +onSelect: string => void,
  +label?: string,
|};

export default function Autocomplete({ values, onSelect, ...rest }: Props) {
  const [input, setInput] = React.useState('');
  const matchedItems = values.filter(value => value.name.includes(input));
  const onClick = React.useCallback(
    (id: string) => {
      onSelect(id);
      setInput('');
    },
    [onSelect],
  );
  return (
    <Container>
      <Input value={input} onChange={setInput} {...rest} />

      <SelectWrapper open={input !== ''}>
        {matchedItems.map(item => (
          <AutocompleteItem
            key={item.id}
            onClick={onClick}
            id={item.id}
            name={item.name}
          />
        ))}
      </SelectWrapper>
    </Container>
  );
}
