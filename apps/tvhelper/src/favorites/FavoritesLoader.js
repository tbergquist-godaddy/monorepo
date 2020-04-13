// @flow strict

import * as React from 'react';
import ContentLoader from 'react-content-loader';

const FavoritesLoader = (): React.Node => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="46" y="130" rx="0" ry="0" width="386" height="30" />
    <rect x="47" y="175" rx="0" ry="0" width="350" height="30" />
    <rect x="47" y="176" rx="0" ry="0" width="7" height="0" />
    <rect x="45" y="220" rx="0" ry="0" width="351" height="31" />
    <rect x="46" y="74" rx="0" ry="0" width="110" height="30" />
  </ContentLoader>
);

export default FavoritesLoader;
