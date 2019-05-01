// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { ProgramDetailSceneQueryResponse } from './__generated__/ProgramDetailSceneQuery.graphql';
import Program from './Program';

type Props = {|
  +programId: string,
|};

export default function ProgramDetailScene(props: Props) {
  const renderInner = React.useCallback(
    (renderProps: ProgramDetailSceneQueryResponse) => {
      return <Program program={renderProps.program} />;
    },
    [],
  );
  return (
    <QueryRenderer
      query={graphql`
        query ProgramDetailSceneQuery($programId: ID!) {
          program(programId: $programId) {
            ...Program_program
          }
        }
      `}
      variables={{ programId: props.programId }}
      render={renderInner}
    />
  );
}
