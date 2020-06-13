// @flow

import * as React from 'react';
import { invariant } from '@adeira/js';

type SelectedItemsState = {|
  +selectedItems: $ReadOnlyArray<string>,
|};

type SelectedItemsActions = {|
  +type: 'add' | 'remove',
  +payload: string,
|};
type Dispatch = (action: SelectedItemsActions) => void;
const SelectedItemsContext: React.Context<?SelectedItemsState> = React.createContext<?SelectedItemsState>();
const SelectedItemsDispatchContext = React.createContext<?Dispatch>();

function selectedItemsReducer(state, action) {
  switch (action.type) {
    case 'add':
      return { selectedItems: [...state.selectedItems, action.payload] };

    case 'remove':
      return { selectedItems: state.selectedItems.filter((item) => item !== action.payload) };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

type ProviderProps = {|
  +children: React.Node,
|};

function SelectedItemsProvider({
  children,
}: ProviderProps): React.Element<typeof SelectedItemsContext.Provider> {
  const [state, dispatch] = React.useReducer(selectedItemsReducer, { selectedItems: [] });
  return (
    <SelectedItemsContext.Provider value={state}>
      <SelectedItemsDispatchContext.Provider value={dispatch}>
        {children}
      </SelectedItemsDispatchContext.Provider>
    </SelectedItemsContext.Provider>
  );
}

function useSelectedItems(): SelectedItemsState {
  const context = React.useContext(SelectedItemsContext);
  invariant(
    context != null,
    'Exptected context to be defined but it was not, did you forget to add the SeletectItemsProvider?',
  );
  return context;
}

function useSelectedItemsDispatch(): Dispatch {
  const context = React.useContext(SelectedItemsDispatchContext);
  invariant(
    context != null,
    'Exptected context to be defined but it was not, did you forget to add the SeletectItemsProvider?',
  );
  return context;
}

export { SelectedItemsProvider, useSelectedItems, useSelectedItemsDispatch };
