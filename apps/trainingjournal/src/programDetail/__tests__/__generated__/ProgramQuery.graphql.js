/**
 * @flow
 * @relayHash 259b6b3ce0303e1b3da94b9356dd25df
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Program_program$ref = any;
export type ProgramQueryVariables = {||};
export type ProgramQueryResponse = {|
  +program: ?{|
    +$fragmentRefs: Program_program$ref
  |}
|};
export type ProgramQuery = {|
  variables: ProgramQueryVariables,
  response: ProgramQueryResponse,
|};
*/


/*
query ProgramQuery {
  program(programId: "123") {
    ...Program_program
    id
  }
}

fragment Program_program on Program {
  name
  ...Weeks_program
}

fragment Weeks_program on Program {
  weeks {
    edges {
      node {
        id
        ...Week_week
      }
    }
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
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v4 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": false
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramQuery",
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
            "kind": "FragmentSpread",
            "name": "Program_program",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramQuery",
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
          (v1/*: any*/),
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
                      (v2/*: any*/),
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
    "name": "ProgramQuery",
    "id": null,
    "text": "query ProgramQuery {\n  program(programId: \"123\") {\n    ...Program_program\n    id\n  }\n}\n\nfragment Program_program on Program {\n  name\n  ...Weeks_program\n}\n\nfragment Weeks_program on Program {\n  weeks {\n    edges {\n      node {\n        id\n        ...Week_week\n      }\n    }\n  }\n}\n\nfragment Week_week on Week {\n  ...Days_week\n  name\n}\n\nfragment Days_week on Week {\n  days {\n    edges {\n      node {\n        id\n        ...Day_day\n      }\n    }\n  }\n}\n\nfragment Day_day on Day {\n  name\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "program": {
          "type": "Program",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "program.name": (v3/*: any*/),
        "program.weeks": {
          "type": "WeekConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
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
        "program.weeks.edges.node.id": (v4/*: any*/),
        "program.weeks.edges.node.name": (v3/*: any*/),
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
        "program.weeks.edges.node.days.edges.node.name": (v3/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '15b20c2d2fdc4ab987c4891b4726cee2';
module.exports = node;
