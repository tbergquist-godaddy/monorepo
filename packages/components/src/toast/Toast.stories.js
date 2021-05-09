// @flow

import type { Node } from 'react';

import Toast from './Toast';
import { useShowToast } from './ToastListState';
import Stack from '../stack/Stack';
import Button from '../button/Button';

let count = 0;

function Wrapper() {
  // const dispatch = useToastAction();
  const showToast = useShowToast();
  const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.dataset.test;

    showToast({
      text: `lol ${++count}`,
      // $FlowFixMe: ok for testing
      type,
      timeout: 3000,
    });
  };

  return (
    <Stack flex>
      <Button dataTest="success" onClick={onClick}>
        Show toast
      </Button>
      <Button color="danger" dataTest="danger" onClick={onClick}>
        Show danger toast
      </Button>
      <Toast />
    </Stack>
  );
}

export const critical = (): Node => {
  return <Wrapper />;
};
export default {
  component: Toast,
  title: 'Toast',
};
