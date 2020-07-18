/**
 * @flow
 */

/* eslint-disable */

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchScene_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Layout_viewer"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQuery",
  "abstractKey": null
};
// prettier-ignore
(node: any).hash = '75939813deba341627b713e2691d5dcf';
export default node;
