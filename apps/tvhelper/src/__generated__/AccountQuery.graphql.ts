/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AccountQueryVariables = {};
export type AccountQueryResponse = {
    readonly viewer: {
        readonly __typename: string;
    } | null;
};
export type AccountQuery = {
    readonly response: AccountQueryResponse;
    readonly variables: AccountQueryVariables;
};



/*
query AccountQuery {
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
    "name": "AccountQuery",
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
    "name": "AccountQuery",
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
    "cacheID": "4b6efd51e00d9afc28ccfcc5e98b4128",
    "id": null,
    "metadata": {},
    "name": "AccountQuery",
    "operationKind": "query",
    "text": "query AccountQuery {\n  viewer {\n    __typename\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fe1c99d8a2b06e40d2a77e4d14e12212';
export default node;
