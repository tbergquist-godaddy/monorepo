/**
 * @flow
 */

/* eslint-disable */

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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddProgramFormTestQuery",
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
    "name": "AddProgramFormTestQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v0/*: any*/),
            "type": "TraningJournalViewer"
          },
          {
            "kind": "InlineFragment",
            "selections": (v0/*: any*/),
            "type": "TvHelperViewer"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
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
          "nullable": true
        }
      }
    },
    "name": "AddProgramFormTestQuery",
    "operationKind": "query",
    "text": "query AddProgramFormTestQuery {\n  viewer {\n    __typename\n    ...AddProgramForm_user\n    ... on TraningJournalViewer {\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment AddProgramForm_user on TraningJournalViewer {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '17306662c4cc95cfaae904f3a564d629';
export default node;
