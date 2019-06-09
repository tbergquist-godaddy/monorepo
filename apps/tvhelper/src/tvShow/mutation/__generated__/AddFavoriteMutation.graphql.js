/**
 * @flow
 * @relayHash ab650d40a5f80903e0a3c2d2f8096e8e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddFavoriteMutationVariables = {|
  serieId: string
|};
export type AddFavoriteMutationResponse = {|
  +addFavorite: ?{|
    +success: ?boolean,
    +tvShow: ?{|
      +node: ?{|
        +id: ?string,
        +isFavorite: ?boolean,
      |}
    |},
  |}
|};
export type AddFavoriteMutation = {|
  variables: AddFavoriteMutationVariables,
  response: AddFavoriteMutationResponse,
|};
*/


/*
mutation AddFavoriteMutation(
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
    "name": "AddFavoriteMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddFavoriteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddFavoriteMutation",
    "id": "354f7565a9fdef385b12a1be6ecbfcbb",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b231428c4f6554abd2aeb292fccd3b95';
module.exports = node;
