/**
 * @flow
 * @relayHash 733036dac38b2581d553f78fa643d228
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "cursor"
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ExerciseListPaginationQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
            "args": [
              (v1/*: any*/),
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ExerciseListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
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
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "exercises",
                "storageKey": null,
                "args": (v4/*: any*/),
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
                          (v3/*: any*/),
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
                          (v2/*: any*/)
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
                "args": (v4/*: any*/),
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
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ExerciseListPaginationQuery",
    "id": null,
    "text": "query ExerciseListPaginationQuery(\n  $count: Int\n  $cursor: String\n) {\n  viewer {\n    __typename\n    ...ExerciseList_exercises_kPtUz\n    ... on TraningJournalViewer {\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment EditExercise_exercise on Exercise {\n  id\n  name\n  muscleGroups\n  videoUrl\n  description\n}\n\nfragment ExerciseDetailCard_exercise on Exercise {\n  id\n  name\n  muscleGroups\n}\n\nfragment ExerciseListItem_exercise on Exercise {\n  ...ExerciseDetailCard_exercise\n  ...EditExercise_exercise\n}\n\nfragment ExerciseList_exercises_kPtUz on TraningJournalViewer {\n  id\n  exercises(first: $count, after: $cursor) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...ExerciseListItem_exercise\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '8e5e90e29a0dfecdc8be8cbf9ffae9d5';
export default node;
