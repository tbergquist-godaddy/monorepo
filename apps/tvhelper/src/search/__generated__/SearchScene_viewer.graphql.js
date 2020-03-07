/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type Layout_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchScene_viewer$ref: FragmentReference;
declare export opaque type SearchScene_viewer$fragmentType: SearchScene_viewer$ref;
export type SearchScene_viewer = {|
  +viewer: ?{|
    +$fragmentRefs: Layout_viewer$ref
  |},
  +$refType: SearchScene_viewer$ref,
|};
export type SearchScene_viewer$data = SearchScene_viewer;
export type SearchScene_viewer$key = {
  +$data?: SearchScene_viewer$data,
  +$fragmentRefs: SearchScene_viewer$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "SearchScene_viewer",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewer",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Layout_viewer",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '75939813deba341627b713e2691d5dcf';
export default node;
