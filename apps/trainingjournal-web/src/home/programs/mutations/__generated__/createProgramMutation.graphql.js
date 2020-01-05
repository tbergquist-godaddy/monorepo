/**
 * @flow
 * @relayHash 68f4cbdc99286c09c913e70d6b9f9177
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    "kind": "LocalArgument",
    "name": "program",
    "type": "CreateProgramInput!",
    "defaultValue": null
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createProgramMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProgram",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateProgram",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "programEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Program",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "ProgramListItem_program",
                    "args": null
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
    "name": "createProgramMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProgram",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateProgram",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "programEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Program",
                "plural": false,
                "selections": [
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
                    "name": "date",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "createProgramMutation",
    "id": null,
    "text": "mutation createProgramMutation(\n  $program: CreateProgramInput!\n) {\n  createProgram(program: $program) {\n    programEdge {\n      node {\n        ...ProgramListItem_program\n        id\n      }\n    }\n  }\n}\n\nfragment ProgramListItem_program on Program {\n  name\n  date\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '8d00767a0db16a8f396cd9f1125d64f4';
export default node;
