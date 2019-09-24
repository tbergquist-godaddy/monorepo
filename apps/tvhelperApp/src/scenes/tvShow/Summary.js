// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { ReadMore } from '@tbergq/rn-components';

import type { Summary_data as SummaryType } from './__generated__/Summary_data.graphql';

type Props = {|
  +data: ?SummaryType,
|};

class Summary extends React.Component<Props> {
  render() {
    return (
      <ReadMore numberOfLines={5} truncatedText="Show more" revealedText="Hide">
        {this.props.data?.summary}
      </ReadMore>
    );
  }
}

export default createFragmentContainer(Summary, {
  data: graphql`
    fragment Summary_data on TvShow {
      summary
    }
  `,
});
