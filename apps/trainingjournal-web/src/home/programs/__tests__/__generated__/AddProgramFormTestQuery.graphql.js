/**
 * @flow
 * @relayHash af0530aa762b7d08a84b1ffdc8bf2445
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type AddProgramForm_user$ref = any;
export type AddProgramFormTestQueryVariables = {||};
export type AddProgramFormTestQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AddProgramForm_user$ref
  |}
|};
export type AddProgramFormTestQuery = {|
  variables: AddProgramFormTestQueryVariables,
  response: AddProgramFormTestQueryResponse,
|};

/*
query AddProgramFormTestQuery {
  viewer {
    __typename
    ...AddProgramForm_user
  }
}

fragment AddProgramForm_user on TraningJournalViewer {
  id
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddProgramFormTestQuery",
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
            "name": "AddProgramForm_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddProgramFormTestQuery",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AddProgramFormTestQuery",
    "id": null,
    "text": "query AddProgramFormTestQuery {\n  viewer {\n    __typename\n    ...AddProgramForm_user\n  }\n}\n\nfragment AddProgramForm_user on TraningJournalViewer {\n  id\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "type": "Viewer",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        }
      }
    }
  }
};
// prettier-ignore
(node: any).hash = '17306662c4cc95cfaae904f3a564d629';
export default node;
