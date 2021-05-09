// @flow strict-local

import type { ComponentType, ElementConfig } from 'react';
import type { RelayProp, RefetchRelayProp, PaginationRelayProp } from '@adeira/relay';
import type { $RelayProps } from '@adeira/relay/src/types.flow';

export type FragmentContainerType<Props, ElementType> = ComponentType<
  $RelayProps<ElementConfig<(Props) => ElementType>, RelayProp>,
>;

export type RefetchContainerType<Props, ElementType> = ComponentType<
  $RelayProps<ElementConfig<(Props) => ElementType>, RefetchRelayProp>,
>;

export type PaginationContainerType<Props, ElementType> = ComponentType<
  $RelayProps<ElementConfig<(Props) => ElementType>, PaginationRelayProp>,
>;
