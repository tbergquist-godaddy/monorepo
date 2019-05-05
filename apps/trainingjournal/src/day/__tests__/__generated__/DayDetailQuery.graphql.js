/**
 * @flow
 * @relayHash 583786d6c31fd8c1f9bb06b16dc424f0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DayDetail_day$ref = any;
export type DayDetailQueryVariables = {||};
export type DayDetailQueryResponse = {|
  +day: ?{|
    +$fragmentRefs: DayDetail_day$ref
  |}
|};
export type DayDetailQuery = {|
  variables: DayDetailQueryVariables,
  response: DayDetailQueryResponse,
|};
*/


/*
query DayDetailQuery {
  day(dayId: "123") {
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
    "kind": "Literal",
    "name": "dayId",
    "value": "123"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v5 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v6 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": false
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DayDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "day",
        "storageKey": "day(dayId:\"123\")",
        "args": (v0/*: any*/),
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
    "name": "DayDetailQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "day",
        "storageKey": "day(dayId:\"123\")",
        "args": (v0/*: any*/),
        "concreteType": "Day",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "exercises",
            "storageKey": "exercises(first:50)",
            "args": (v2/*: any*/),
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
                      (v3/*: any*/),
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
                          (v1/*: any*/),
                          (v3/*: any*/)
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
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "ExerciseTable_exercises",
            "filters": null
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DayDetailQuery",
    "id": null,
    "text": "query DayDetailQuery {\n  day(dayId: \"123\") {\n    ...DayDetail_day\n    id\n  }\n}\n\nfragment DayDetail_day on Day {\n  name\n  ...ExerciseTable_day\n  ...AddExerciseForm_day\n}\n\nfragment ExerciseTable_day on Day {\n  exercises(first: 50) {\n    edges {\n      node {\n        id\n        ...ExerciseRow_exercise\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment AddExerciseForm_day on Day {\n  id\n}\n\nfragment ExerciseRow_exercise on Exercise {\n  set\n  reps\n  breakTime\n  baseExercise {\n    name\n    id\n  }\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "day": {
          "type": "Day",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "day.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "day.name": (v4/*: any*/),
        "day.exercises": {
          "type": "ExerciseConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "day.exercises.edges": {
          "type": "ExerciseEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "day.exercises.pageInfo": {
          "type": "PageInfo",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "day.exercises.edges.node": {
          "type": "Exercise",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "day.exercises.edges.node.id": (v5/*: any*/),
        "day.exercises.edges.cursor": (v6/*: any*/),
        "day.exercises.pageInfo.endCursor": (v4/*: any*/),
        "day.exercises.pageInfo.hasNextPage": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "day.exercises.edges.node.set": (v4/*: any*/),
        "day.exercises.edges.node.reps": (v4/*: any*/),
        "day.exercises.edges.node.breakTime": (v4/*: any*/),
        "day.exercises.edges.node.baseExercise": {
          "type": "BaseExercise",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "day.exercises.edges.node.__typename": (v6/*: any*/),
        "day.exercises.edges.node.baseExercise.name": (v4/*: any*/),
        "day.exercises.edges.node.baseExercise.id": (v5/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a2eddfd3cc7b64604bc99f4ec0ef0df';
module.exports = node;
