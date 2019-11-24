/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowListItem_data$ref: FragmentReference;
declare export opaque type TvShowListItem_data$fragmentType: TvShowListItem_data$ref;
export type TvShowListItem_data = {|
  +id: string,
  +name: ?string,
  +status: ?string,
  +rating: ?number,
  +image: ?{|
    +medium: ?string
  |},
  +$refType: TvShowListItem_data$ref,
|};
export type TvShowListItem_data$data = TvShowListItem_data;
export type TvShowListItem_data$key = {
  +$data?: TvShowListItem_data$data,
  +$fragmentRefs: TvShowListItem_data$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "TvShowListItem_data",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rating",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "TvHelperImage",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "medium",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '41497783a7b76833b7b7d4de4e4a335f';
export default node;
