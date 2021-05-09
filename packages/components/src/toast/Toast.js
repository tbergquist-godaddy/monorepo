// @flow

import type { Element, ComponentType } from 'react';
import styled from 'styled-components';

import { useToastListState } from './ToastListState';
import ToastContent from './ToastContent';

const ToastWrapper = styled.div`
  position: fixed;
  bottom: ${({ bottomPosition }) => bottomPosition}px;
  right: ${({ rightPosition }) => rightPosition}px;
  & > * {
    margin-bottom: 8px;
  }
  z-index: ${({ theme }) => theme.zIndex.onTop};
`;

type Props = {
  +bottom?: number,
  +right?: number,
  +onHide?: () => void,
  +dataTest?: string,
};

export type Config = {
  +text: string,
  +type?: 'success' | 'danger',
  +icon?: Element<any>,
  +timeout?: number,
};

export default (function Toast({ bottom = 16, right = 16 }: Props) {
  const toasts = useToastListState();

  return (
    <ToastWrapper rightPosition={right} bottomPosition={bottom}>
      {toasts.map((toast) => {
        return (
          <ToastContent
            key={toast.id}
            toastId={toast.id}
            text={toast.text}
            isVisible={toast.isVisible}
            type={toast.type ?? 'success'}
            timeout={toast.timeout}
          />
        );
      })}
    </ToastWrapper>
  );
}: ComponentType<Props>);
