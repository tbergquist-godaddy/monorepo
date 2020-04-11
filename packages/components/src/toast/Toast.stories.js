// @flow

import * as React from 'react';
import styled from 'styled-components';

import Toast from './Toast';
import Button from '../button/Button';

const Stack = styled.div`
  display: flex;
  * {
    margin-right: 8px;
  }
`;
const Consumer = () => {
  const ref = React.useRef(null);
  const onClick = (type?: any) => {
    if (ref.current != null) {
      ref.current.show({ text: 'Cheers mate', type });
    }
  };

  return (
    <>
      <Toast ref={ref} />
      <Stack>
        <Button onClick={onClick}>Show secondary</Button>
        <Button onClick={() => onClick('danger')}>Show danger</Button>
        <Button onClick={() => onClick('success')}>Show success</Button>
      </Stack>
    </>
  );
};

export const Normal = (): React.Node => <Consumer />;

export default {
  component: Toast,
  title: 'Toast',
};
