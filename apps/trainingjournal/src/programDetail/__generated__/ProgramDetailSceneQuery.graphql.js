/**
 * @flow
 * @relayHash 19d7c992d5e470b11b25f43af44ed908
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Program_program$ref = any;
export type ProgramDetailSceneQueryVariables = {|
  programId: string
|};
export type ProgramDetailSceneQueryResponse = {|
  +program: ?{|
    +$fragmentRefs: Program_program$ref
  |}
|};
export type ProgramDetailSceneQuery = {|
  variables: ProgramDetailSceneQueryVariables,
  response: ProgramDetailSceneQueryResponse,
|};
*/


/*
query ProgramDetailSceneQuery(
  $programId: ID!
) {
  program(programId: $programId) {
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
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "programId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "programId",
    "variableName": "programId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
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
    "name": "ProgramDetailSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    "name": "ProgramDetailSceneQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "program",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Program",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
                      (v3/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramDetailSceneQuery",
    "id": null,
    "text": "query ProgramDetailSceneQuery(\n  $programId: ID!\n) {\n  program(programId: $programId) {\n    ...Program_program\n    id\n  }\n}\n\nfragment Program_program on Program {\n  name\n  ...Weeks_program\n}\n\nfragment Weeks_program on Program {\n  weeks {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9c9898dc547d0bb99e48e5a48b4716b';
module.exports = node;
