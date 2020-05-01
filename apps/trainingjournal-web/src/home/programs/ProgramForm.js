// @flow

import * as React from 'react';
import { InputField, Button } from '@tbergq/components';
import { Stack } from '@kiwicom/orbit-components';

type Props = {|
  +onCancel: () => void,
  +isSubmitting: boolean,
|};

export default function ProgramForm(props: Props): React.Element<typeof Stack> {
  return (
    <Stack spaceAfter="normal">
      <InputField name="name" label="Name" />
      <Stack justify="end">
        <Button color="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type="submit" loading={props.isSubmitting}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
