// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { Row, Col, Heading } from '@tbergq/components';

import type { TvShowPage_tvShow as TvShow } from './__generated__/TvShowPage_tvShow.graphql';
import Episodes from './episodes/Episodes';
import TvShowImage from './TvShowImage';

type Props = {|
  +tvShow: ?TvShow,
|};

const TvShowPage = (props: Props) => {
  const name = props.tvShow?.name ?? '';
  return (
    <>
      <Heading>{name}</Heading>
      <Row>
        <Col md={6} sm={12}>
          <TvShowImage tvShow={props.tvShow} />
        </Col>
        <Col md={6} sm={12}>
          <div dangerouslySetInnerHTML={{ __html: props.tvShow?.summary }} />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Episodes episodes={props.tvShow} />
        </Col>
      </Row>
    </>
  );
};

export default createFragmentContainer(TvShowPage, {
  tvShow: graphql`
    fragment TvShowPage_tvShow on TvShow {
      name
      summary(stripTags: false)
      ...TvShowImage_tvShow
      ...Episodes_episodes
    }
  `,
});
