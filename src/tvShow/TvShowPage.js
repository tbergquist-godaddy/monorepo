// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/tvhelper-relay';
import { Row, Col, Heading } from '@tbergq/tvhelper-components';
import styled from 'styled-components';

import type { TvShowPage_tvShow as TvShow } from './__generated__/TvShowPage_tvShow.graphql';
import Episodes from './episodes/Episodes';

type Props = {|
  +tvShow: ?TvShow,
|};

const Image = styled.img({
  width: '100%',
  maxHeight: '300px',
});

const TvShowPage = (props: Props) => {
  const src = props.tvShow?.image?.original ?? '';
  const name = props.tvShow?.name ?? '';
  return (
    <>
      <Heading>{name}</Heading>
      <Row>
        <Col md={6} sm={12}>
          <Image src={src} alt="lol" />
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
      image {
        original
      }
      summary(stripTags: false)
      ...Episodes_episodes
    }
  `,
});
