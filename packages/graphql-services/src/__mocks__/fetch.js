// @flow

import path from 'path';

import meta from '../datasets/meta.json';

export default function Fetch(url: string): Object {
  const metaUrl = meta[url];
  if (metaUrl == null) {
    throw new Error(`No mock result found for url ${url}.`);
  }

  // $FlowAllowDynamicImport
  return require(path.join(__dirname, '..', 'datasets', metaUrl));
}
