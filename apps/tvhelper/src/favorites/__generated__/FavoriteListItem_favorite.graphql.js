/**
 * @flow
 */

/* eslint-disable */

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FavoriteListItem_favorite",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nextEpisode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "previousEpisode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TvHelperImage",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "medium",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvShow",
  "abstractKey": null
};
// prettier-ignore
(node: any).hash = 'f5be8c9bfed9dcea574147dbce5c98e3';
export default node;
