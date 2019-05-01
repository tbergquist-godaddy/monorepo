/**
 * @flow
 * @relayHash 4f1c3481b47aa3b0195d17fdc2c5ecd7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Week_week$ref = any;
export type WeekQueryVariables = {||};
export type WeekQueryResponse = {|
  +program: ?{|
    +weeks: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +$fragmentRefs: Week_week$ref
        |}
      |}>
    |}
  |}
|};
export type WeekQuery = {|
  variables: WeekQueryVariables,
  response: WeekQueryResponse,
|};
*/


/*
query WeekQuery {
  program(programId: "123") {
    weeks {
      edges {
        node {
          ...Week_week
          id
        }
      }
    }
    id
  }
}

fragment Week_week on Week {
  ...Days_week
  name
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
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "WeekQuery",
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
                        "name": "Week_week",
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
    "name": "WeekQuery",
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
                                  (v2/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      (v2/*: any*/),
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
    "name": "WeekQuery",
    "id": null,
    "text": "query WeekQuery {\n  program(programId: \"123\") {\n    weeks {\n      edges {\n        node {\n          ...Week_week\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Week_week on Week {\n  ...Days_week\n  name\n}\n\nfragment Days_week on Week {\n  days {\n    edges {\n      node {\n        id\n        ...Day_day\n      }\n    }\n  }\n}\n\nfragment Day_day on Day {\n  name\n}\n",
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
        "program.weeks.edges.node.name": (v4/*: any*/),
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
        "program.weeks.edges.node.days.edges.node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "program.weeks.edges.node.days.edges.node.name": (v4/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd950ca05abffadc0e7166cf8325e754f';
module.exports = node;
