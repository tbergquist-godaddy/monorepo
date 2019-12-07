// @flow

import * as React from 'react';
import type { RecordMap } from '@adeira/relay';

type Props = {|
  +children: React.Node,
  +initialValue: ?RecordMap,
  +token: ?string,
|};

type State = {|
  +ssrData: ?RecordMap,
  +token: ?string,
|};

type Action = {|
  +setToken: string => void,
|};

const QueryRendererContext = React.createContext<?State>();
const QueryRendererActionContext = React.createContext<?Action>();

function QueryRendererProvider(props: Props) {
  const [token, setToken] = React.useState(props.token);
  const state = React.useMemo(() => {
    return {
      ssrData: props.initialValue,
      token,
    };
  }, [props.initialValue, token]);
  return (
    <QueryRendererContext.Provider value={state}>
      <QueryRendererActionContext.Provider value={{ setToken }}>
        {props.children}
      </QueryRendererActionContext.Provider>
    </QueryRendererContext.Provider>
  );
}

function useQueryRenderer(): State {
  const context = React.useContext(QueryRendererContext);

  return context ?? { ssrData: null, token: null };
}

function useQueryRendererAction(): Action {
  const context = React.useContext(QueryRendererActionContext);
  if (context == null) {
    throw new Error('Did you forget to use the provider?');
  }
  return context;
}

export { QueryRendererProvider, useQueryRenderer, useQueryRendererAction };
