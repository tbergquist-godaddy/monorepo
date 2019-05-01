/**
 * @flow
 * @relayHash 80ecb131acbad5bae9866517f93bd6b1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Days_week$ref = any;
export type DaysQueryVariables = {||};
export type DaysQueryResponse = {|
  +program: ?{|
    +weeks: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +$fragmentRefs: Days_week$ref
        |}
      |}>
    |}
  |}
|};
export type DaysQuery = {|
  variables: DaysQueryVariables,
  response: DaysQueryResponse,
|};
*/


/*
query DaysQuery {
  program(programId: "123") {
    weeks {
      edges {
        node {
          ...Days_week
          id
        }
      }
    }
    id
  }
}

fragment Days_week on Week {
  days {
    edges {
      node {
        id
        ...Day_day
      }
    }
  }
}

fragment Day_day on Day {
  name
  exercises {
    edges {
      node {
        id
        baseExercise {
          name
          id
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "programId",
    "value": "123"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
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
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": false
},
v5 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DaysQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": "program(programId:\"123\")",
        "args": (v0/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "weeks",
            "storageKey": null,
            "args": null,
            "concreteType": "WeekConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "WeekEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Week",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "FragmentSpread",
                        "name": "Days_week",
                        "args": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DaysQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": "program(programId:\"123\")",
        "args": (v0/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "weeks",
            "storageKey": null,
            "args": null,
            "concreteType": "WeekConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "WeekEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Week",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "days",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "DayConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "DayEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Day",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
                                  (v2/*: any*/),
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
                                              (v1/*: any*/),
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
                                                  (v1/*: any*/)
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      (v1/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DaysQuery",
    "id": null,
    "text": "query DaysQuery {\n  program(programId: \"123\") {\n    weeks {\n      edges {\n        node {\n          ...Days_week\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Days_week on Week {\n  days {\n    edges {\n      node {\n        id\n        ...Day_day\n      }\n    }\n  }\n}\n\nfragment Day_day on Day {\n  name\n  exercises {\n    edges {\n      node {\n        id\n        baseExercise {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "program": {
          "type": "Program",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.weeks": {
          "type": "WeekConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.id": (v3/*: any*/),
        "program.weeks.edges": {
          "type": "WeekEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "program.weeks.edges.node": {
          "type": "Week",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.weeks.edges.node.id": (v3/*: any*/),
        "program.weeks.edges.node.days": {
          "type": "DayConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.weeks.edges.node.days.edges": {
          "type": "DayEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "program.weeks.edges.node.days.edges.node": {
          "type": "Day",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.weeks.edges.node.days.edges.node.id": (v4/*: any*/),
        "program.weeks.edges.node.days.edges.node.name": (v5/*: any*/),
        "program.weeks.edges.node.days.edges.node.exercises": {
          "type": "ExerciseConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.weeks.edges.node.days.edges.node.exercises.edges": {
          "type": "ExerciseEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "program.weeks.edges.node.days.edges.node.exercises.edges.node": {
          "type": "Exercise",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.weeks.edges.node.days.edges.node.exercises.edges.node.id": (v4/*: any*/),
        "program.weeks.edges.node.days.edges.node.exercises.edges.node.baseExercise": {
          "type": "BaseExercise",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.weeks.edges.node.days.edges.node.exercises.edges.node.baseExercise.name": (v5/*: any*/),
        "program.weeks.edges.node.days.edges.node.exercises.edges.node.baseExercise.id": (v3/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f011ebeb5f2438cb7312247aa5bd6e15';
module.exports = node;
