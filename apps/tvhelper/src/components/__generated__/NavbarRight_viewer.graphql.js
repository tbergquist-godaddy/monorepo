/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NavbarRight_viewer$ref: FragmentReference;
declare export opaque type NavbarRight_viewer$fragmentType: NavbarRight_viewer$ref;
export type NavbarRight_viewer = {|
  +__typename: "TvHelperViewer",
  +username: ?string,
  +$refType: NavbarRight_viewer$ref,
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other",
  +$refType: NavbarRight_viewer$ref,
|};
export type NavbarRight_viewer$data = NavbarRight_viewer;
export type NavbarRight_viewer$key = {
  +$data?: NavbarRight_viewer$data,
  +$fragmentRefs: NavbarRight_viewer$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "NavbarRight_viewer",
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
      "kind": "InlineFragment",
      "type": "TvHelperViewer",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "username",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = 'cbab55f33db3a85051fe7a0f73c52ad1';
export default node;
