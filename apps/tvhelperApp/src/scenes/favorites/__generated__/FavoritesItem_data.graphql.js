/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoritesItem_data$ref: FragmentReference;
declare export opaque type FavoritesItem_data$fragmentType: FavoritesItem_data$ref;
export type FavoritesItem_data = {|
  +id: string,
  +name: ?string,
  +image: ?{|
    +medium: ?string
  |},
  +previousEpisode: ?any,
  +nextEpisode: ?any,
  +status: ?string,
  +$refType: FavoritesItem_data$ref,
|};
export type FavoritesItem_data$data = FavoritesItem_data;
export type FavoritesItem_data$key = {
  +$data?: FavoritesItem_data$data,
  +$fragmentRefs: FavoritesItem_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FavoritesItem_data",
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
      "name": "nextEpisode",
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
(node/*: any*/).hash = 'ec3e9b9522f72432be94589f7831202f';
module.exports = node;
