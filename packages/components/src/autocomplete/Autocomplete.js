// @flow

import * as React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { InputField as Input } from '@kiwicom/orbit-components';

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

export default function Autocomplete({ values, onSelect, ...rest }: Props): React.Element<any> {
  const [input, setInput] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  const matchedItems = values.filter(value =>
    value.name.toLowerCase().includes(input.toLowerCase()),
  );

  const onClick = React.useCallback(
    (id: string, name: string) => {
      onSelect(id);
      setInput(name);
    },
    [onSelect],
  );

  const onFocus = React.useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        {...rest}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <SelectWrapper open={isFocused}>
        {matchedItems.map(item => (
          <AutocompleteItem key={item.id} onClick={onClick} id={item.id} name={item.name} />
        ))}
      </SelectWrapper>
    </Container>
  );
}
