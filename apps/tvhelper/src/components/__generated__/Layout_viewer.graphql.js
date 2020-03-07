/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type NavbarRight_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Layout_viewer$ref: FragmentReference;
declare export opaque type Layout_viewer$fragmentType: Layout_viewer$ref;
export type Layout_viewer = {|
  +__typename: string,
  +$fragmentRefs: NavbarRight_viewer$ref,
  +$refType: Layout_viewer$ref,
|};
export type Layout_viewer$data = Layout_viewer;
export type Layout_viewer$key = {
  +$data?: Layout_viewer$data,
  +$fragmentRefs: Layout_viewer$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Layout_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "NavbarRight_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node: any).hash = 'a84e1f319eb90fc30eeb4c981163c546';
export default node;
