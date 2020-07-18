/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type FavoriteListItem_favorite$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Favorites_favorites$ref: FragmentReference;
declare export opaque type Favorites_favorites$fragmentType: Favorites_favorites$ref;
export type Favorites_favorites = {|
  +favorites: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: FavoriteListItem_favorite$ref,
      |}
    |}>
  |},
  +$refType: Favorites_favorites$ref,
|};
export type Favorites_favorites$data = Favorites_favorites;
export type Favorites_favorites$key = {
  +$data?: Favorites_favorites$data,
  +$fragmentRefs: Favorites_favorites$ref,
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": {
        "sortBy": "PREVIOUS_EPISODE",
        "sortDirection": "DESC"
      },
      "kind": "LocalArgument",
      "name": "options"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Favorites_favorites",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "options",
          "variableName": "options"
        }
      ],
      "concreteType": "TvShowConnection",
      "kind": "LinkedField",
      "name": "favorites",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TvShowEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TvShow",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "FavoriteListItem_favorite"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvHelperViewer",
  "abstractKey": null
};
// prettier-ignore
(node: any).hash = '55ddc3fc2c9847b760504c902f606cda';
export default node;
