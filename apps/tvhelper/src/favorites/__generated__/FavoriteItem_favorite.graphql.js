/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoriteItem_favorite$ref: FragmentReference;
declare export opaque type FavoriteItem_favorite$fragmentType: FavoriteItem_favorite$ref;
export type FavoriteItem_favorite = {|
  +name: ?string,
  +nextEpisode: ?any,
  +previousEpisode: ?any,
  +id: string,
  +status: ?string,
  +$refType: FavoriteItem_favorite$ref,
|};
export type FavoriteItem_favorite$data = FavoriteItem_favorite;
export type FavoriteItem_favorite$key = {
  +$data?: FavoriteItem_favorite$data,
  +$fragmentRefs: FavoriteItem_favorite$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "FavoriteItem_favorite",
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
    }
  ]
};
// prettier-ignore
(node: any).hash = '059bc1b25e5f8b3b8ed3f9ff7b53375b';
export default node;
