/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type Layout_viewer$ref = any;
export type LayoutTestQueryVariables = {||};
export type LayoutTestQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Layout_viewer$ref
  |}
|};
export type LayoutTestQuery = {|
  variables: LayoutTestQueryVariables,
  response: LayoutTestQueryResponse,
|};

/*
query LayoutTestQuery {
  viewer {
    __typename
    ...Layout_viewer
    ... on TvHelperViewer {
      id
    }
  }
}

fragment Layout_viewer on Viewer {
  __typename
  ...NavbarRight_viewer
}

fragment NavbarRight_viewer on Viewer {
  __typename
  ... on TvHelperViewer {
    username
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutTestQuery",
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
            "name": "Layout_viewer"
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
    "name": "LayoutTestQuery",
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
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "username",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
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
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "type": "Viewer",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.__typename": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "viewer.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.username": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": true
        }
      }
    },
    "name": "LayoutTestQuery",
    "operationKind": "query",
    "text": "query LayoutTestQuery {\n  viewer {\n    __typename\n    ...Layout_viewer\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  __typename\n  ...NavbarRight_viewer\n}\n\nfragment NavbarRight_viewer on Viewer {\n  __typename\n  ... on TvHelperViewer {\n    username\n  }\n}\n"
  }
};
// prettier-ignore
(node: any).hash = 'e152ead61ed188bfaea72c3f5b9d15a5';
export default node;
