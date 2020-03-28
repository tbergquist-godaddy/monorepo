// @flow strict-local

import * as React from 'react';
import type { RelayProp, RefetchRelayProp, PaginationRelayProp } from '@adeira/relay';
import type { $RelayProps } from '@adeira/relay/src/types.flow';

export type FragmentContainerType<Props, ElementType> = React.ComponentType<
  $RelayProps<React.ElementConfig<(Props) => ElementType>, RelayProp>,
>;

export type RefetchContainerType<Props, ElementType> = React.ComponentType<
  $RelayProps<React.ElementConfig<(Props) => ElementType>, RefetchRelayProp>,
>;

export type PaginationContainerType<Props, ElementType> = React.ComponentType<
  $RelayProps<React.ElementConfig<(Props) => ElementType>, PaginationRelayProp>,
>;
