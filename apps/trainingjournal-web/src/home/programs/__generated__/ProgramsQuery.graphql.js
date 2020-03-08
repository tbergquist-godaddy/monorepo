/**
 * @flow
 * @relayHash d28eefb34486930fd0ce0a85b6737c50
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProgramList_viewer",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "AddProgramForm_user",
            "args": null
          }
        ]
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
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "programs",
                "storageKey": "programs(first:10)",
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
                          (v1/*: any*/),
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
                            "name": "date",
                            "args": null,
                            "storageKey": null
                          },
                          (v0/*: any*/)
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
          {
            "kind": "InlineFragment",
            "type": "TvHelperViewer",
            "selections": [
              (v1/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramsQuery",
    "id": null,
    "text": "query ProgramsQuery {\n  viewer {\n    __typename\n    ...ProgramList_viewer\n    ...AddProgramForm_user\n    ... on TraningJournalViewer {\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment AddProgramForm_user on TraningJournalViewer {\n  id\n}\n\nfragment ProgramListItem_program on Program {\n  name\n  date\n}\n\nfragment ProgramList_viewer on TraningJournalViewer {\n  id\n  programs(first: 10) {\n    edges {\n      node {\n        id\n        ...ProgramListItem_program\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'a08fce00b0b48ffd81621526b487abeb';
export default node;
