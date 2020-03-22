// @flow strict

import * as React from 'react';

type State = {
  +movie: string | null,
  +subtitle: string | null,
};

type ActionState = {
  +dispatch: Action => void,
};

const CastContext = React.createContext<State | void>(undefined);
const CastContextAction = React.createContext<ActionState | void>(undefined);

type ContextProps = {
  +children: React.Node,
};

type Action = {
  +type: 'setMovie' | 'setSubtitle',
  +payload: string | null,
};
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setMovie':
      return {
        ...state,
        movie: action.payload,
      };
    case 'setSubtitle':
      return {
        ...state,
        subtitle: action.payload,
      };
    default:
      return state;
  }
}

const intialStatate = { movie: null, subtitle: null };
function CastContextProvider(props: ContextProps) {
  const [state, dispatch] = React.useReducer(reducer, intialStatate);

  const action = React.useMemo(
    () => ({
      dispatch,
    }),
    [],
  );
  return (
    <CastContext.Provider value={state}>
      <CastContextAction.Provider value={action}>{props.children}</CastContextAction.Provider>
    </CastContext.Provider>
  );
}

function useCastState(): State {
  const context = React.useContext(CastContext);
  if (context == null) {
    throw new Error('No cast provider was added');
  }
  return context;
}

function useCastAction(): ActionState {
  const context = React.useContext(CastContextAction);
  if (context == null) {
    throw new Error('No cast provider was added');
  }
  return context;
}

export { CastContextProvider, useCastState, useCastAction };
