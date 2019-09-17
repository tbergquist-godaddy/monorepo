// @flow

import * as React from 'react';

type Props = {|
  +children: React.Node,
  +initialValue: ?{ ... },
  +token: ?string,
|};

type State = {|
  +ssrData: ?{ ... },
  +token: ?string,
|};
const QueryRendererContext = React.createContext<?State>();

function QueryRendererProvider(props: Props) {
  const state = React.useMemo(() => {
    return {
      ssrData: props.initialValue,
      token: props.token,
    };
  }, [props.initialValue, props.token]);
  return (
    <QueryRendererContext.Provider value={state}>{props.children}</QueryRendererContext.Provider>
  );
}

function useQueryRenderer(): State {
  const context = React.useContext(QueryRendererContext);

  return context ?? { ssrData: {}, token: null };
}

export { QueryRendererProvider, useQueryRenderer };
