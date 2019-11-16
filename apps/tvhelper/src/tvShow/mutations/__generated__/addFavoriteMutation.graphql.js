/**
 * @flow
 * @relayHash 6e2c43802ec194f9a14ee6f4ddaa3c78
 */

/* eslint-disable */

'use strict';

/*::
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
*/


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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "serieId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addFavorite",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "serieId",
        "variableName": "serieId"
      }
    ],
    "concreteType": "AddFavorite",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShow",
        "storageKey": null,
        "args": null,
        "concreteType": "TvShowNode",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShow",
            "plural": false,
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
                "name": "isFavorite",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "addFavoriteMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "addFavoriteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "addFavoriteMutation",
    "id": null,
    "text": "mutation addFavoriteMutation(\n  $serieId: ID!\n) {\n  addFavorite(serieId: $serieId) {\n    success\n    tvShow {\n      node {\n        id\n        isFavorite\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '92bffb315e32ac8306063e91a6fe1a33';
module.exports = node;
