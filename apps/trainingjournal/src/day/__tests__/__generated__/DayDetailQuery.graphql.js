/**
 * @flow
 * @relayHash 3c8b7f4b781843808bd8e9302dddfad4
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
}

fragment ExerciseTable_day on Day {
  exercises {
    edges {
      node {
        id
        ...ExerciseRow_exercise
      }
    }
  }
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v4 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
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
            "storageKey": null,
            "args": null,
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
                      (v2/*: any*/),
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
                          (v2/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DayDetailQuery",
    "id": null,
    "text": "query DayDetailQuery {\n  day(dayId: \"123\") {\n    ...DayDetail_day\n    id\n  }\n}\n\nfragment DayDetail_day on Day {\n  name\n  ...ExerciseTable_day\n}\n\nfragment ExerciseTable_day on Day {\n  exercises {\n    edges {\n      node {\n        id\n        ...ExerciseRow_exercise\n      }\n    }\n  }\n}\n\nfragment ExerciseRow_exercise on Exercise {\n  set\n  reps\n  breakTime\n  baseExercise {\n    name\n    id\n  }\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "day": {
          "type": "Day",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "day.id": (v3/*: any*/),
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
        "day.exercises.edges.node": {
          "type": "Exercise",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "day.exercises.edges.node.id": {
          "type": "ID",
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
        "day.exercises.edges.node.baseExercise.name": (v4/*: any*/),
        "day.exercises.edges.node.baseExercise.id": (v3/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a2eddfd3cc7b64604bc99f4ec0ef0df';
module.exports = node;
