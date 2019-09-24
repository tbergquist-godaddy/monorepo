// @flow strict

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { EpisodeSceneQueryResponse } from './__generated__/EpisodeSceneQuery.graphql';
import Episode from './Episode';

type Props = {|
  +id: string,
|};

export default class EpisodeScene extends React.Component<Props> {
  renderInner = (props: EpisodeSceneQueryResponse) => <Episode data={props.episode} />;

  render() {
    return (
      <QueryRenderer
        render={this.renderInner}
        query={graphql`
          query EpisodeSceneQuery($id: ID!) {
            episode(id: $id) {
              ...Episode_data
            }
          }
        `}
        variables={{ id: this.props.id }}
      />
    );
  }
}
