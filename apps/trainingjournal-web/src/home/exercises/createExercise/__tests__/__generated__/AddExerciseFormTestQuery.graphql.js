/**
 * @flow
 * @relayHash f68ad7a5e6ec2da3910ace76bd844dcb
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ExerciseEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Exercise",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddExerciseFormTestQuery",
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
            "name": "AddExerciseForm_user",
            "args": null
          },
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": "exercises",
                "name": "__ExerciseList_exercises_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "ExerciseConnection",
                "plural": false,
                "selections": (v2/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddExerciseFormTestQuery",
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
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              (v0/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "exercises",
                "storageKey": "exercises(first:1)",
                "args": (v3/*: any*/),
                "concreteType": "ExerciseConnection",
                "plural": false,
                "selections": (v2/*: any*/)
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "exercises",
                "args": (v3/*: any*/),
                "handle": "connection",
                "key": "ExerciseList_exercises",
                "filters": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "TvHelperViewer",
            "selections": [
              (v0/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AddExerciseFormTestQuery",
    "id": null,
    "text": "query AddExerciseFormTestQuery {\n  viewer {\n    __typename\n    ...AddExerciseForm_user\n    ... on TraningJournalViewer {\n      exercises(first: 1) {\n        edges {\n          node {\n            id\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment AddExerciseForm_user on Viewer {\n  ... on TraningJournalViewer {\n    id\n  }\n}\n",
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
    }
  }
};
})();
// prettier-ignore
(node: any).hash = '8762db1cdc896a2b9ccc4319a64b23ab';
export default node;
