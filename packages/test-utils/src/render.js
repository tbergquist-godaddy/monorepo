// @flow

import * as React from 'react';
import {
  render,
  type RenderOptionsWithoutCustomQueries,
  type RenderResult,
} from '@testing-library/react';

function testRenderer(
  ui: React.Element<any>,
  options?: RenderOptionsWithoutCustomQueries,
): RenderResult<> {
  return render(ui, options);
}

export default testRenderer;
