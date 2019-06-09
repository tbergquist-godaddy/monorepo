/**
 * @flow
 * @relayHash 3bc202c8239f4fc2c90498c736ba8ebd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteFavoriteMutationVariables = {|
  serieId: string
|};
export type DeleteFavoriteMutationResponse = {|
  +deleteFavorite: ?{|
    +success: ?boolean
  |}
|};
export type DeleteFavoriteMutation = {|
  variables: DeleteFavoriteMutationVariables,
  response: DeleteFavoriteMutationResponse,
|};
*/


/*
mutation DeleteFavoriteMutation(
  $serieId: ID!
) {
  deleteFavorite(serieId: $serieId) {
    success
    id
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
    "kind": "Variable",
    "name": "serieId",
    "variableName": "serieId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "success",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteFavoriteMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteFavorite",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RangeDelete",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteFavoriteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteFavorite",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "RangeDelete",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteFavoriteMutation",
    "id": "6902c83e00749d0a1ef2b636b1d4347b",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d5e70542c8bf1d81545b696e615b85c';
module.exports = node;
