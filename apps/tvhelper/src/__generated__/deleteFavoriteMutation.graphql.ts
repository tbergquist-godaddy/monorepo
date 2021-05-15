/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type deleteFavoriteMutationVariables = {
    serieId: string;
};
export type deleteFavoriteMutationResponse = {
    readonly deleteFavorite: {
        readonly success: boolean | null;
        readonly id: string | null;
    } | null;
};
export type deleteFavoriteMutation = {
    readonly response: deleteFavoriteMutationResponse;
    readonly variables: deleteFavoriteMutationVariables;
};



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
    "concreteType": "RangeDelete",
    "kind": "LinkedField",
    "name": "deleteFavorite",
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
        "kind": "ScalarField",
        "name": "id",
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
    "name": "deleteFavoriteMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteFavoriteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "09191c8b7fd22238e7ead31bea13bc1d",
    "id": null,
    "metadata": {},
    "name": "deleteFavoriteMutation",
    "operationKind": "mutation",
    "text": "mutation deleteFavoriteMutation(\n  $serieId: ID!\n) {\n  deleteFavorite(serieId: $serieId) {\n    success\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '59a7c691aad375d601cb9e1541f872f9';
export default node;
