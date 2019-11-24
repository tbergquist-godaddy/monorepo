/**
 * @flow
 * @relayHash 3f4cef2b1cd8898f4e3d5e6d10cfd5c7
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
export type deleteFavoriteMutationVariables = {|
  serieId: string
|};
export type deleteFavoriteMutationResponse = {|
  +deleteFavorite: ?{|
    +success: ?boolean,
    +id: ?string,
  |}
|};
export type deleteFavoriteMutation = {|
  variables: deleteFavoriteMutationVariables,
  response: deleteFavoriteMutationResponse,
|};

/*
mutation deleteFavoriteMutation(
  $serieId: ID!
) {
  deleteFavorite(serieId: $serieId) {
    success
    id
  }
}
*/

const node: ConcreteRequest = (function(){
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
    "name": "deleteFavorite",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "serieId",
        "variableName": "serieId"
      }
    ],
    "concreteType": "RangeDelete",
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
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "deleteFavoriteMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteFavoriteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteFavoriteMutation",
    "id": null,
    "text": "mutation deleteFavoriteMutation(\n  $serieId: ID!\n) {\n  deleteFavorite(serieId: $serieId) {\n    success\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '59a7c691aad375d601cb9e1541f872f9';
export default node;
