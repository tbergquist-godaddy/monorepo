/**
 * @flow
 * @relayHash 9a1a33a0d48ee24fd768814fe2774c30
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramList_programs$ref = any;
export type ProgramListQueryVariables = {|
  first: number,
  after?: ?string,
|};
export type ProgramListQueryResponse = {|
  +$fragmentRefs: ProgramList_programs$ref
|};
export type ProgramListQuery = {|
  variables: ProgramListQueryVariables,
  response: ProgramListQueryResponse,
|};
*/


/*
query ProgramListQuery(
  $first: Int!
  $after: String
) {
  ...ProgramList_programs_3r7Ke1
}

fragment ProgramList_programs_3r7Ke1 on RootQuery {
  programs(first: $first, after: $after) {
    edges {
      node {
        id
        ...ProgramItem_program
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ProgramItem_program on Program {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  (v1/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramListQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProgramList_programs",
        "args": [
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "after"
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programs",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "ProgramConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Program",
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
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "programs",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "ProgramList_programs",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramListQuery",
    "id": null,
    "text": "query ProgramListQuery(\n  $first: Int!\n  $after: String\n) {\n  ...ProgramList_programs_3r7Ke1\n}\n\nfragment ProgramList_programs_3r7Ke1 on RootQuery {\n  programs(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        ...ProgramItem_program\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ProgramItem_program on Program {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1dfdd0f04a208a4b3f7023da80d2feb8';
module.exports = node;
