// @flow

import type { Node } from 'react';
import ContentLoader from 'react-content-loader';

const TvShowLoader = (): Node => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="14" y="22" rx="0" ry="0" width="264" height="171" />
    <rect x="25" y="232" rx="0" ry="0" width="483" height="46" />
    <rect x="26" y="299" rx="0" ry="0" width="386" height="47" />
    <rect x="25" y="370" rx="0" ry="0" width="383" height="39" />
  </ContentLoader>
);

export default TvShowLoader;
