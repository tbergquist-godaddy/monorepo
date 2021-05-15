/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LayoutTestQueryVariables = {};
export type LayoutTestQueryResponse = {
    readonly viewer: {
        readonly __typename: string;
    } | null;
};
export type LayoutTestQuery = {
    readonly response: LayoutTestQueryResponse;
    readonly variables: LayoutTestQueryVariables;
};



/*
query LayoutTestQuery {
  viewer {
    __typename
    ... on TvHelperViewer {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LayoutTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "type": "TvHelperViewer",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "960ab89c7bad751653efc1b26347c13d",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Viewer"
        },
        "viewer.__typename": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
        "viewer.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        }
      }
    },
    "name": "LayoutTestQuery",
    "operationKind": "query",
    "text": "query LayoutTestQuery {\n  viewer {\n    __typename\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '90778122c2d0527e87a56e424eb88440';
export default node;
