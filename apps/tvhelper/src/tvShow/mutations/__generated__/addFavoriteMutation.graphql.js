/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type addFavoriteMutationVariables = {|
  serieId: string
|};
export type addFavoriteMutationResponse = {|
  +addFavorite: ?{|
    +success: ?boolean,
    +tvShow: ?{|
      +node: ?{|
        +id: string,
        +isFavorite: ?boolean,
      |}
    |},
  |}
|};
export type addFavoriteMutation = {|
  variables: addFavoriteMutationVariables,
  response: addFavoriteMutationResponse,
|};

/*
mutation addFavoriteMutation(
  $serieId: ID!
) {
  addFavorite(serieId: $serieId) {
    success
    tvShow {
      node {
        id
        isFavorite
      }
    }
  }
}
*/

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
    "name": "addFavoriteMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addFavoriteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0fe4c087abfbae722729997747962fa1",
    "id": null,
    "metadata": {},
    "name": "addFavoriteMutation",
    "operationKind": "mutation",
    "text": "mutation addFavoriteMutation(\n  $serieId: ID!\n) {\n  addFavorite(serieId: $serieId) {\n    success\n    tvShow {\n      node {\n        id\n        isFavorite\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '92bffb315e32ac8306063e91a6fe1a33';
export default node;
