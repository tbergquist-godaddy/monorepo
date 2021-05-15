/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SignupQueryVariables = {};
export type SignupQueryResponse = {
    readonly viewer: {
        readonly __typename: string;
    } | null;
};
export type SignupQuery = {
    readonly response: SignupQueryResponse;
    readonly variables: SignupQueryVariables;
};



/*
query SignupQuery {
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
    "name": "SignupQuery",
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
    "name": "SignupQuery",
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
    "cacheID": "29e9bceadff3c321fc82fcd192db0f2d",
    "id": null,
    "metadata": {},
    "name": "SignupQuery",
    "operationKind": "query",
    "text": "query SignupQuery {\n  viewer {\n    __typename\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ad447490fcbd0fe1b03e63021e79eb97';
export default node;
