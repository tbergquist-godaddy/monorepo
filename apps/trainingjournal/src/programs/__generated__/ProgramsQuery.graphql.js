/**
 * @flow
 * @relayHash 87391502a0d6f0d2dcb08571dd9bba5c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramList_programs$ref = any;
export type ProgramsQueryVariables = {||};
export type ProgramsQueryResponse = {|
  +$fragmentRefs: ProgramList_programs$ref
|};
export type ProgramsQuery = {|
  variables: ProgramsQueryVariables,
  response: ProgramsQueryResponse,
|};
*/


/*
query ProgramsQuery {
  ...ProgramList_programs
}

fragment ProgramList_programs on RootQuery {
  programs(first: 10) {
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
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProgramList_programs",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programs",
        "storageKey": "programs(first:10)",
        "args": (v0/*: any*/),
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
        "args": (v0/*: any*/),
        "handle": "connection",
        "key": "ProgramList_programs",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramsQuery",
    "id": null,
    "text": "query ProgramsQuery {\n  ...ProgramList_programs\n}\n\nfragment ProgramList_programs on RootQuery {\n  programs(first: 10) {\n    edges {\n      node {\n        id\n        ...ProgramItem_program\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ProgramItem_program on Program {\n  id\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3356d94c0ab5840373f679ac4cf2f128';
module.exports = node;
