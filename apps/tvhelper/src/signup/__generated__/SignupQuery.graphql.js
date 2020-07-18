/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type Layout_viewer$ref = any;
export type SignupQueryVariables = {||};
export type SignupQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Layout_viewer$ref
  |}
|};
export type SignupQuery = {|
  variables: SignupQueryVariables,
  response: SignupQueryResponse,
|};

/*
query SignupQuery {
  viewer {
    __typename
    ...Layout_viewer
    ... on TvHelperViewer {
      id
    }
  }
}

fragment Layout_viewer on Viewer {
  __isViewer: __typename
  __typename
  ...NavbarRight_viewer
}

fragment NavbarRight_viewer on Viewer {
  __isViewer: __typename
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Layout_viewer"
          }
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isViewer"
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
            "type": "TvHelperViewer",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c7fc317e2f162a51aed85d647ec8032f",
    "id": null,
    "metadata": {},
    "name": "SignupQuery",
    "operationKind": "query",
    "text": "query SignupQuery {\n  viewer {\n    __typename\n    ...Layout_viewer\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  __isViewer: __typename\n  __typename\n  ...NavbarRight_viewer\n}\n\nfragment NavbarRight_viewer on Viewer {\n  __isViewer: __typename\n  __typename\n  ... on TvHelperViewer {\n    username\n  }\n}\n"
  }
};
// prettier-ignore
(node: any).hash = 'de726865833b5fe068a7a5893346aef1';
export default node;
