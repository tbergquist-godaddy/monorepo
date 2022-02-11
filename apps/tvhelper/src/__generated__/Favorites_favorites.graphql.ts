/**
 * @generated SignedSource<<f61f8d534635122a789f514f6f30ff29>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Favorites_favorites$data = {
  readonly favorites: {
    readonly pageInfo: {
      readonly hasNextPage: boolean;
    };
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"FavoriteListItem_favorite">;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "Favorites_favorites";
};
export type Favorites_favorites$key = {
  readonly " $data"?: Favorites_favorites$data;
  readonly " $fragmentSpreads": FragmentRefs<"Favorites_favorites">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "first"
    },
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
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": null,
        "direction": "forward",
        "path": [
          "favorites"
        ]
      }
    ]
  },
  "name": "Favorites_favorites",
  "selections": [
    {
      "alias": "favorites",
      "args": [
        {
          "kind": "Variable",
          "name": "options",
          "variableName": "options"
        }
      ],
      "concreteType": "TvShowConnection",
      "kind": "LinkedField",
      "name": "__Favorites_favorites_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
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

(node as any).hash = "7679187c9df51d98b24dc6f14df0d0b0";

export default node;
