// @flow

import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default (styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${defaultTokens.widthBreakpointTablet}px) {
    width: 750px;
  }
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    width: 970px;
  }
  @media (min-width: ${defaultTokens.widthBreakpointLargeDesktop}px) {
    width: 1170px;
  }
`: any);
