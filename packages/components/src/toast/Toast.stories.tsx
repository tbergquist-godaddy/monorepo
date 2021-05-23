import { MouseEvent } from 'react';

import Toast from './Toast';
import Button from '../button/Button';
import { ToastProvider, useShowToast } from './ToastContext';

let count = 0;

const Template = () => {
  const showToast = useShowToast();
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const type: any = e.currentTarget.dataset.test;

    showToast({
      text: `lol ${++count}`,
      type,
      timeout: 3000,
    });
  };

  return (
    <>
      <span style={{ marginRight: '16px' }}>
        <Button dataTest="success" onClick={onClick}>
          Show toast
        </Button>
      </span>
      <Button color="danger" dataTest="danger" onClick={onClick}>
        Show danger toast
      </Button>
      <Toast />
    </>
  );
};

export const Default = Template.bind({});

export default {
  component: Toast,
  title: 'Toast',
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};
