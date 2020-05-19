/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type AddProgramForm_user$ref = any;
type ProgramList_viewer$ref = any;
export type ProgramsQueryVariables = {||};
export type ProgramsQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ProgramList_viewer$ref & AddProgramForm_user$ref
  |}
|};
export type ProgramsQuery = {|
  variables: ProgramsQueryVariables,
  response: ProgramsQueryResponse,
|};

/*
query ProgramsQuery {
  viewer {
    __typename
    ...ProgramList_viewer
    ...AddProgramForm_user
    ... on TraningJournalViewer {
      id
    }
    ... on TvHelperViewer {
      id
    }
  }
}

fragment AddProgramForm_user on TraningJournalViewer {
  id
}

fragment ProgramListItem_program on Program {
  name
  date
}

fragment ProgramList_viewer on TraningJournalViewer {
  id
  programs(first: 10) {
    edges {
      node {
        id
        ...ProgramListItem_program
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
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProgramsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProgramList_viewer"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AddProgramForm_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProgramsQuery",
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
              (v1/*: any*/),
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "ProgramConnection",
                "kind": "LinkedField",
                "name": "programs",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProgramEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Program",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "date",
                            "storageKey": null
                          },
                          (v0/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "programs(first:10)"
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ProgramList_programs",
                "kind": "LinkedHandle",
                "name": "programs"
              }
            ],
            "type": "TraningJournalViewer"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/)
            ],
            "type": "TvHelperViewer"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ProgramsQuery",
    "operationKind": "query",
    "text": "query ProgramsQuery {\n  viewer {\n    __typename\n    ...ProgramList_viewer\n    ...AddProgramForm_user\n    ... on TraningJournalViewer {\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment AddProgramForm_user on TraningJournalViewer {\n  id\n}\n\nfragment ProgramListItem_program on Program {\n  name\n  date\n}\n\nfragment ProgramList_viewer on TraningJournalViewer {\n  id\n  programs(first: 10) {\n    edges {\n      node {\n        id\n        ...ProgramListItem_program\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'a08fce00b0b48ffd81621526b487abeb';
export default node;
