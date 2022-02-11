/**
 * @generated SignedSource<<27dd93c8e7a5c8d019950fa8d9e3f66c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useDeleteFavoriteMutation$variables = {
  serieId: string;
};
export type useDeleteFavoriteMutation$data = {
  readonly deleteFavorite: {
    readonly success: boolean | null;
    readonly id: string | null;
  } | null;
};
export type useDeleteFavoriteMutation = {
  variables: useDeleteFavoriteMutation$variables;
  response: useDeleteFavoriteMutation$data;
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
    "name": "useDeleteFavoriteMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDeleteFavoriteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6484f86aef3f45968d76dda9239b8665",
    "id": null,
    "metadata": {},
    "name": "useDeleteFavoriteMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteFavoriteMutation(\n  $serieId: ID!\n) {\n  deleteFavorite(serieId: $serieId) {\n    success\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "9d3f1395124253308db494c7b72547bd";

export default node;
