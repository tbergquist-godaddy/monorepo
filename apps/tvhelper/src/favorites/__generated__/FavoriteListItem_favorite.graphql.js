/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoriteListItem_favorite$ref: FragmentReference;
declare export opaque type FavoriteListItem_favorite$fragmentType: FavoriteListItem_favorite$ref;
export type FavoriteListItem_favorite = {|
  +name: ?string,
  +nextEpisode: ?any,
  +previousEpisode: ?any,
  +id: string,
  +status: ?string,
  +image: ?{|
    +medium: ?string
  |},
  +$refType: FavoriteListItem_favorite$ref,
|};
export type FavoriteListItem_favorite$data = FavoriteListItem_favorite;
export type FavoriteListItem_favorite$key = {
  +$data?: FavoriteListItem_favorite$data,
  +$fragmentRefs: FavoriteListItem_favorite$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "FavoriteListItem_favorite",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "nextEpisode",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "previousEpisode",
      "args": null,
      "storageKey": null
    },
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
      "name": "status",
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
(node: any).hash = 'f5be8c9bfed9dcea574147dbce5c98e3';
export default node;
