/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type AddExerciseForm_user$ref = any;
export type AddExerciseFormTestQueryVariables = {||};
export type AddExerciseFormTestQueryResponse = {|
  +viewer: ?{|
    +exercises?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string
        |}
      |}>
    |},
    +$fragmentRefs: AddExerciseForm_user$ref,
  |}
|};
export type AddExerciseFormTestQuery = {|
  variables: AddExerciseFormTestQueryVariables,
  response: AddExerciseFormTestQueryResponse,
|};

/*
query AddExerciseFormTestQuery {
  viewer {
    __typename
    ...AddExerciseForm_user
    ... on TraningJournalViewer {
      exercises(first: 1) {
        edges {
          node {
            id
            __typename
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
      id
    }
    ... on TvHelperViewer {
      id
    }
  }
}

fragment AddExerciseForm_user on Viewer {
  ... on TraningJournalViewer {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ExerciseEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Exercise",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
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
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v4 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": false
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddExerciseFormTestQuery",
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
            "name": "AddExerciseForm_user"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "exercises",
                "args": null,
                "concreteType": "ExerciseConnection",
                "kind": "LinkedField",
                "name": "__ExerciseList_exercises_connection",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              }
            ],
            "type": "TraningJournalViewer"
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
    "name": "AddExerciseFormTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": (v3/*: any*/),
                "concreteType": "ExerciseConnection",
                "kind": "LinkedField",
                "name": "exercises",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": "exercises(first:1)"
              },
              {
                "alias": null,
                "args": (v3/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "ExerciseList_exercises",
                "kind": "LinkedHandle",
                "name": "exercises"
              }
            ],
            "type": "TraningJournalViewer"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/)
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
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "viewer",
            "exercises"
          ]
        }
      ],
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "type": "Viewer",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.exercises": {
          "type": "ExerciseConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "viewer.exercises.edges": {
          "type": "ExerciseEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "viewer.exercises.pageInfo": {
          "type": "PageInfo",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "viewer.exercises.edges.node": {
          "type": "Exercise",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.exercises.edges.node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.exercises.edges.cursor": (v4/*: any*/),
        "viewer.exercises.pageInfo.endCursor": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.exercises.pageInfo.hasNextPage": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "viewer.exercises.edges.node.__typename": (v4/*: any*/)
      }
    },
    "name": "AddExerciseFormTestQuery",
    "operationKind": "query",
    "text": "query AddExerciseFormTestQuery {\n  viewer {\n    __typename\n    ...AddExerciseForm_user\n    ... on TraningJournalViewer {\n      exercises(first: 1) {\n        edges {\n          node {\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment AddExerciseForm_user on Viewer {\n  ... on TraningJournalViewer {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '8762db1cdc896a2b9ccc4319a64b23ab';
export default node;
