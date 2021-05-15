/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginQueryVariables = {};
export type LoginQueryResponse = {
    readonly viewer: {
        readonly __typename: string;
    } | null;
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
query LoginQuery {
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
    "name": "LoginQuery",
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
    "name": "LoginQuery",
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
    "cacheID": "e159c190f634e329e5f5d693878ed222",
    "id": null,
    "metadata": {},
    "name": "LoginQuery",
    "operationKind": "query",
    "text": "query LoginQuery {\n  viewer {\n    __typename\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd456407ec99fb33dc0d99630dd8710cf';
export default node;
