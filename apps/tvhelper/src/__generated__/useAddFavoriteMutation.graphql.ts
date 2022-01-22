/**
 * @generated SignedSource<<608ac0939a7eb59303c90caee88a85df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useAddFavoriteMutation$variables = {
  serieId: string;
};
export type useAddFavoriteMutationVariables = useAddFavoriteMutation$variables;
export type useAddFavoriteMutation$data = {
  readonly addFavorite: {
    readonly success: boolean | null;
    readonly tvShow: {
      readonly node: {
        readonly id: string;
        readonly isFavorite: boolean | null;
      } | null;
    } | null;
  } | null;
};
export type useAddFavoriteMutationResponse = useAddFavoriteMutation$data;
export type useAddFavoriteMutation = {
  variables: useAddFavoriteMutationVariables;
  response: useAddFavoriteMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "serieId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "serieId",
        "variableName": "serieId"
      }
    ],
    "concreteType": "AddFavorite",
    "kind": "LinkedField",
    "name": "addFavorite",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TvShowNode",
        "kind": "LinkedField",
        "name": "tvShow",
        "plural": false,
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFavorite",
                "storageKey": null
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useAddFavoriteMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAddFavoriteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2739b3dfad2f88a7a2be42fb9637a98a",
    "id": null,
    "metadata": {},
    "name": "useAddFavoriteMutation",
    "operationKind": "mutation",
    "text": "mutation useAddFavoriteMutation(\n  $serieId: ID!\n) {\n  addFavorite(serieId: $serieId) {\n    success\n    tvShow {\n      node {\n        id\n        isFavorite\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f8e196df65842bb0faf134fee1682047";

export default node;
