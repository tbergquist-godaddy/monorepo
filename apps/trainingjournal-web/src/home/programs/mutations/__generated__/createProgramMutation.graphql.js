/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type ProgramListItem_program$ref = any;
export type CreateProgramInput = {|
  name: string
|};
export type createProgramMutationVariables = {|
  program: CreateProgramInput
|};
export type createProgramMutationResponse = {|
  +createProgram: ?{|
    +programEdge: ?{|
      +node: ?{|
        +$fragmentRefs: ProgramListItem_program$ref
      |}
    |}
  |}
|};
export type createProgramMutation = {|
  variables: createProgramMutationVariables,
  response: createProgramMutationResponse,
|};

/*
mutation createProgramMutation(
  $program: CreateProgramInput!
) {
  createProgram(program: $program) {
    programEdge {
      node {
        ...ProgramListItem_program
        id
      }
    }
  }
}

fragment ProgramListItem_program on Program {
  name
  date
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "program",
    "type": "CreateProgramInput!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "program",
    "variableName": "program"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createProgramMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateProgram",
        "kind": "LinkedField",
        "name": "createProgram",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProgramEdge",
            "kind": "LinkedField",
            "name": "programEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Program",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ProgramListItem_program"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createProgramMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateProgram",
        "kind": "LinkedField",
        "name": "createProgram",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProgramEdge",
            "kind": "LinkedField",
            "name": "programEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Program",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
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
                    "name": "date",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "createProgramMutation",
    "operationKind": "mutation",
    "text": "mutation createProgramMutation(\n  $program: CreateProgramInput!\n) {\n  createProgram(program: $program) {\n    programEdge {\n      node {\n        ...ProgramListItem_program\n        id\n      }\n    }\n  }\n}\n\nfragment ProgramListItem_program on Program {\n  name\n  date\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '8d00767a0db16a8f396cd9f1125d64f4';
export default node;
