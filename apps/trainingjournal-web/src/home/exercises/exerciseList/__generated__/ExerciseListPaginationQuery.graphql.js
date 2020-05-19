/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type ExerciseList_exercises$ref = any;
export type ExerciseListPaginationQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type ExerciseListPaginationQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ExerciseList_exercises$ref
  |}
|};
export type ExerciseListPaginationQuery = {|
  variables: ExerciseListPaginationQueryVariables,
  response: ExerciseListPaginationQueryResponse,
|};

/*
query ExerciseListPaginationQuery(
  $count: Int
  $cursor: String
) {
  viewer {
    __typename
    ...ExerciseList_exercises_kPtUz
    ... on TraningJournalViewer {
      id
    }
    ... on TvHelperViewer {
      id
    }
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

fragment ExerciseList_exercises_kPtUz on TraningJournalViewer {
  id
  exercises(first: $count, after: $cursor) {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String"
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ExerciseListPaginationQuery",
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
            "args": [
              (v1/*: any*/),
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ExerciseList_exercises"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ExerciseListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "ExerciseConnection",
                "kind": "LinkedField",
                "name": "exercises",
                "plural": false,
                "selections": [
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
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
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
                          (v3/*: any*/),
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
                            "name": "muscleGroups",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "videoUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
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
              (v3/*: any*/)
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
    "name": "ExerciseListPaginationQuery",
    "operationKind": "query",
    "text": "query ExerciseListPaginationQuery(\n  $count: Int\n  $cursor: String\n) {\n  viewer {\n    __typename\n    ...ExerciseList_exercises_kPtUz\n    ... on TraningJournalViewer {\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment EditExercise_exercise on Exercise {\n  id\n  name\n  muscleGroups\n  videoUrl\n  description\n}\n\nfragment ExerciseDetailCard_exercise on Exercise {\n  id\n  name\n  muscleGroups\n}\n\nfragment ExerciseListItem_exercise on Exercise {\n  ...ExerciseDetailCard_exercise\n  ...EditExercise_exercise\n}\n\nfragment ExerciseList_exercises_kPtUz on TraningJournalViewer {\n  id\n  exercises(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...ExerciseListItem_exercise\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '8e5e90e29a0dfecdc8be8cbf9ffae9d5';
export default node;
