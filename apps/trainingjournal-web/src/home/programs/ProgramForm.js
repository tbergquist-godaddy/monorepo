// @flow

import * as React from 'react';
import { InputField, Button, Stack } from '@tbergq/components';

type Props = {|
  +onCancel: () => void,
  +isSubmitting: boolean,
|};

export default function ProgramForm(props: Props) {
  return (
    <Stack spaceAfter="normal">
      <InputField name="name" label="Name" />
      <Stack justify="end">
        <Button type="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button submit={true} loading={props.isSubmitting}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
