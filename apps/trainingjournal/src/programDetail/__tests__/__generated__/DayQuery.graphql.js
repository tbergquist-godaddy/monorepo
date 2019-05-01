/**
 * @flow
 * @relayHash d2ad81f081e542f064f25336518df958
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Day_day$ref = any;
export type DayQueryVariables = {||};
export type DayQueryResponse = {|
  +program: ?{|
    +weeks: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +days: ?{|
            +edges: ?$ReadOnlyArray<?{|
              +node: ?{|
                +$fragmentRefs: Day_day$ref
              |}
            |}>
          |}
        |}
      |}>
    |}
  |}
|};
export type DayQuery = {|
  variables: DayQueryVariables,
  response: DayQueryResponse,
|};
*/


/*
query DayQuery {
  program(programId: "123") {
    weeks {
      edges {
        node {
          days {
            edges {
              node {
                ...Day_day
                id
              }
            }
          }
          id
        }
      }
    }
    id
  }
}

fragment Day_day on Day {
  name
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
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DayQuery",
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
                                  {
                                    "kind": "FragmentSpread",
                                    "name": "Day_day",
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
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DayQuery",
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
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "name",
                                    "args": null,
                                    "storageKey": null
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
    "name": "DayQuery",
    "id": null,
    "text": "query DayQuery {\n  program(programId: \"123\") {\n    weeks {\n      edges {\n        node {\n          days {\n            edges {\n              node {\n                ...Day_day\n                id\n              }\n            }\n          }\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Day_day on Day {\n  name\n}\n",
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
        "program.id": (v2/*: any*/),
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
        "program.weeks.edges.node.days": {
          "type": "DayConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.weeks.edges.node.id": (v2/*: any*/),
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
        "program.weeks.edges.node.days.edges.node.id": (v2/*: any*/),
        "program.weeks.edges.node.days.edges.node.name": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": true
        }
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29cbc629ba495f2ce8cc7e5442ebc9e2';
module.exports = node;
