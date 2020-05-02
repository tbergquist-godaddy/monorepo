// @flow

import * as React from 'react';
import { InputField, Button, Stack } from '@tbergq/components';

type Props = {|
  +isSubmitting: boolean,
  +onCancel?: () => void,
|};

export default function ExerciseForm(props: Props): React.Element<typeof Stack> {
  return (
    <Stack>
      <Stack flex={true}>
        <InputField name="name" label="Name *" />
        <InputField name="muscleGroups" label="Muscle groups" placeholder="Ex (Upper back, Lats)" />
      </Stack>
      <Stack flex={true}>
        <InputField name="description" label="Description" />
        <InputField name="videoUrl" label="Video url" />
      </Stack>
      <Stack flex={true} justify="flex-end">
        {props.onCancel != null && (
          <Button color="secondary" onClick={props.onCancel}>
            Cancel
          </Button>
        )}
        <Button loading={props.isSubmitting} type="submit">
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
