// @flow strict-local

import * as React from 'react';
import { Button, Stack } from '@kiwicom/orbit-components';
import path from 'path';
import styled from 'styled-components';

type Props = {
  +extensions: $ReadOnlyArray<string>,
  +name: string,
  +buttonText: string,
  +onSelect: (string | null) => void,
};

const dialog = electron.remote.dialog;

const LabelWrapper = styled.div(({ hasRendererd }) => ({
  opacity: hasRendererd ? 1 : 0,
  maxWidth: hasRendererd ? '100%' : '0%',
  transition: 'all 0.5s ease-in',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}));

const Label = ({ children }: { +children: React.Node }) => {
  const [hasRendererd, setHasRendered] = React.useState(false);
  React.useEffect(() => {
    setHasRendered(true);
  }, []);
  return <LabelWrapper hasRendererd={hasRendererd}>{children}</LabelWrapper>;
};

export default function FileSelector({
  extensions,
  name,
  buttonText,
  onSelect,
}: Props): React.Node {
  const [value, setValue] = React.useState(null);
  const onClick = () => {
    if (value === null) {
      const files: $ReadOnlyArray<string> | void = dialog.showOpenDialogSync({
        properties: ['openFile'],
        filters: [{ name, extensions }],
      });
      if (Array.isArray(files)) {
        setValue(files[0]);
        onSelect(files[0]);
      }
    } else {
      setValue(null);
      onSelect(null);
    }
  };

  return (
    <Stack flex={true} align="center">
      {value !== null && <Label>{`${name}: ${path.basename(value)}`}</Label>}
      <Button
        circled={value !== null}
        type={value === null ? 'info' : 'critical'}
        size="small"
        onClick={onClick}
      >
        {value === null ? buttonText : 'X'}
      </Button>
    </Stack>
  );
}
