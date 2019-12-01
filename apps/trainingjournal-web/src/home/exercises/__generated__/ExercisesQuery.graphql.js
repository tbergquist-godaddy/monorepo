/**
 * @flow
 * @relayHash 11c3f93d5b526e9a00fd638f4f026d5b
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type ExerciseList_exercises$ref = any;
export type ExercisesQueryVariables = {||};
export type ExercisesQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ExerciseList_exercises$ref
  |}
|};
export type ExercisesQuery = {|
  variables: ExercisesQueryVariables,
  response: ExercisesQueryResponse,
|};

/*
query ExercisesQuery {
  viewer {
    __typename
    ...ExerciseList_exercises
  }
}

fragment ExerciseListItem_exercise on Exercise {
  name
}

fragment ExerciseList_exercises on TraningJournalViewer {
  exercises(first: 10) {
    edges {
      node {
        id
        ...ExerciseListItem_exercise
      }
    }
  }
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ExercisesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ExerciseList_exercises",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ExercisesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "exercises",
                "storageKey": "exercises(first:10)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10
                  }
                ],
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "id",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ExercisesQuery",
    "id": null,
    "text": "query ExercisesQuery {\n  viewer {\n    __typename\n    ...ExerciseList_exercises\n  }\n}\n\nfragment ExerciseListItem_exercise on Exercise {\n  name\n}\n\nfragment ExerciseList_exercises on TraningJournalViewer {\n  exercises(first: 10) {\n    edges {\n      node {\n        id\n        ...ExerciseListItem_exercise\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node: any).hash = '3afd72b27f7a9c5d89597b1386ba791b';
export default node;
