// @flow

import * as React from 'react';

const QueryRendererContext = React.createContext<?{ ... }>();

type Props = {|
  +children: React.Node,
  +initialValue: { ... },
|};

function QueryRendererProvider(props: Props) {
  return (
    <QueryRendererContext.Provider value={props.initialValue}>
      {props.children}
    </QueryRendererContext.Provider>
  );
}

function useQueryRenderer(): ?{ ... } {
  const context = React.useContext(QueryRendererContext);

  return context;
}

export { QueryRendererProvider, useQueryRenderer };
