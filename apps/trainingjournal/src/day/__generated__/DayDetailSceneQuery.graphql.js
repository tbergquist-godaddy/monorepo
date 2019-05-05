/**
 * @flow
 * @relayHash aecea7092fa03f404f2da9329cc9e46d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DayDetail_day$ref = any;
export type DayDetailSceneQueryVariables = {|
  dayId: string
|};
export type DayDetailSceneQueryResponse = {|
  +day: ?{|
    +$fragmentRefs: DayDetail_day$ref
  |}
|};
export type DayDetailSceneQuery = {|
  variables: DayDetailSceneQueryVariables,
  response: DayDetailSceneQueryResponse,
|};
*/


/*
query DayDetailSceneQuery(
  $dayId: ID!
) {
  day(dayId: $dayId) {
    ...DayDetail_day
    id
  }
}

fragment DayDetail_day on Day {
  name
  ...ExerciseTable_day
  ...AddExerciseForm_day
}

fragment ExerciseTable_day on Day {
  exercises(first: 50) {
    edges {
      node {
        id
        ...ExerciseRow_exercise
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment AddExerciseForm_day on Day {
  id
}

fragment ExerciseRow_exercise on Exercise {
  set
  reps
  breakTime
  baseExercise {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "dayId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "dayId",
    "variableName": "dayId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DayDetailSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "day",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Day",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "DayDetail_day",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DayDetailSceneQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "day",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Day",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "exercises",
            "storageKey": "exercises(first:50)",
            "args": (v3/*: any*/),
            "concreteType": "ExerciseConnection",
            "plural": false,
            "selections": [
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
                      (v4/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "set",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "reps",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "breakTime",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "baseExercise",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BaseExercise",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v4/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
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
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "exercises",
            "args": (v3/*: any*/),
            "handle": "connection",
            "key": "ExerciseTable_exercises",
            "filters": null
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DayDetailSceneQuery",
    "id": null,
    "text": "query DayDetailSceneQuery(\n  $dayId: ID!\n) {\n  day(dayId: $dayId) {\n    ...DayDetail_day\n    id\n  }\n}\n\nfragment DayDetail_day on Day {\n  name\n  ...ExerciseTable_day\n  ...AddExerciseForm_day\n}\n\nfragment ExerciseTable_day on Day {\n  exercises(first: 50) {\n    edges {\n      node {\n        id\n        ...ExerciseRow_exercise\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AddExerciseForm_day on Day {\n  id\n}\n\nfragment ExerciseRow_exercise on Exercise {\n  set\n  reps\n  breakTime\n  baseExercise {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57fc9f2598e39ab0e699d2402ff5cc5c';
module.exports = node;
