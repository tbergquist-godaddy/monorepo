/**
 * @flow
 */

/* eslint-disable */

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Layout_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NavbarRight_viewer"
    }
  ],
  "type": "Viewer",
  "abstractKey": "__isViewer"
};
// prettier-ignore
(node: any).hash = 'a84e1f319eb90fc30eeb4c981163c546';
export default node;
