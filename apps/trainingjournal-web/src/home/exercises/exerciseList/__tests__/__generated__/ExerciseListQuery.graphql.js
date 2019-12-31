/**
 * @flow
 * @relayHash c8bfd426749a9258498ec31e1d7aba7e
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type ExerciseList_exercises$ref = any;
export type ExerciseListQueryVariables = {||};
export type ExerciseListQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ExerciseList_exercises$ref
  |}
|};
export type ExerciseListQuery = {|
  variables: ExerciseListQueryVariables,
  response: ExerciseListQueryResponse,
|};

/*
query ExerciseListQuery {
  viewer {
    __typename
    ...ExerciseList_exercises
  }
}

fragment EditExercise_exercise on Exercise {
  id
  name
  muscleGroups
  videoUrl
  description
}

fragment ExerciseDetailCard_exercise on Exercise {
  id
  name
  muscleGroups
}

fragment ExerciseListItem_exercise on Exercise {
  ...ExerciseDetailCard_exercise
  ...EditExercise_exercise
}

fragment ExerciseList_exercises on TraningJournalViewer {
  id
  exercises(first: 10) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        ...ExerciseListItem_exercise
        __typename
      }
      cursor
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
],
v3 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": false
},
v4 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v5 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": false
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ExerciseListQuery",
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
            "name": "ExerciseList_exercises",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ExerciseListQuery",
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
                "name": "exercises",
                "storageKey": "exercises(first:10)",
                "args": (v2/*: any*/),
                "concreteType": "ExerciseConnection",
                "plural": false,
                "selections": [
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
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
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
                            "name": "muscleGroups",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "videoUrl",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "description",
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
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "exercises",
                "args": (v2/*: any*/),
                "handle": "connection",
                "key": "ExerciseList_exercises",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ExerciseListQuery",
    "id": null,
    "text": "query ExerciseListQuery {\n  viewer {\n    __typename\n    ...ExerciseList_exercises\n  }\n}\n\nfragment EditExercise_exercise on Exercise {\n  id\n  name\n  muscleGroups\n  videoUrl\n  description\n}\n\nfragment ExerciseDetailCard_exercise on Exercise {\n  id\n  name\n  muscleGroups\n}\n\nfragment ExerciseListItem_exercise on Exercise {\n  ...ExerciseDetailCard_exercise\n  ...EditExercise_exercise\n}\n\nfragment ExerciseList_exercises on TraningJournalViewer {\n  id\n  exercises(first: 10) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...ExerciseListItem_exercise\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "type": "Viewer",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.id": (v3/*: any*/),
        "viewer.exercises": {
          "type": "ExerciseConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.exercises.pageInfo": {
          "type": "PageInfo",
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
        "viewer.exercises.pageInfo.hasNextPage": {
          "type": "Boolean",
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
        "viewer.exercises.pageInfo.endCursor": (v4/*: any*/),
        "viewer.exercises.edges.node.id": (v3/*: any*/),
        "viewer.exercises.edges.cursor": (v5/*: any*/),
        "viewer.exercises.edges.node.__typename": (v5/*: any*/),
        "viewer.exercises.edges.node.name": (v4/*: any*/),
        "viewer.exercises.edges.node.muscleGroups": (v4/*: any*/),
        "viewer.exercises.edges.node.videoUrl": (v4/*: any*/),
        "viewer.exercises.edges.node.description": (v4/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node: any).hash = '3919a535e3288e9bb74e6a9305cb4f94';
export default node;
