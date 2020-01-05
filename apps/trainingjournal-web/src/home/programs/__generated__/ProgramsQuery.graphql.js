/**
 * @flow
 * @relayHash 501341419f7b093220106e4df751b42b
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type ProgramList_viewer$ref = any;
export type ProgramsQueryVariables = {||};
export type ProgramsQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ProgramList_viewer$ref
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
  }
}

fragment ProgramListItem_program on Program {
  name
  date
}

fragment ProgramList_viewer on TraningJournalViewer {
  programs {
    edges {
      node {
        id
        ...ProgramListItem_program
      }
    }
  }
}
*/

const node: ConcreteRequest = {
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "programs",
                "storageKey": null,
                "args": null,
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
                            "name": "date",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
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
    "text": "query ProgramsQuery {\n  viewer {\n    __typename\n    ...ProgramList_viewer\n  }\n}\n\nfragment ProgramListItem_program on Program {\n  name\n  date\n}\n\nfragment ProgramList_viewer on TraningJournalViewer {\n  programs {\n    edges {\n      node {\n        id\n        ...ProgramListItem_program\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node: any).hash = '05c8e22a3cafb47d8e5b8a81715b2258';
export default node;
