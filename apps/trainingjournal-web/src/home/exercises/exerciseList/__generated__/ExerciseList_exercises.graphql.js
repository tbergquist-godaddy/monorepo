/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type ExerciseListItem_exercise$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseList_exercises$ref: FragmentReference;
declare export opaque type ExerciseList_exercises$fragmentType: ExerciseList_exercises$ref;
export type ExerciseList_exercises = {|
  +id: string,
  +exercises: ?{|
    +pageInfo: {|
      +hasNextPage: boolean
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ExerciseListItem_exercise$ref,
      |}
    |}>,
  |},
  +$refType: ExerciseList_exercises$ref,
|};
export type ExerciseList_exercises$data = ExerciseList_exercises;
export type ExerciseList_exercises$key = {
  +$data?: ExerciseList_exercises$data,
  +$fragmentRefs: ExerciseList_exercises$ref,
  ...
};


const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "exercises"
        ]
      }
    ]
  },
  "name": "ExerciseList_exercises",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "exercises",
      "args": null,
      "concreteType": "ExerciseConnection",
      "kind": "LinkedField",
      "name": "__ExerciseList_exercises_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ExerciseEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Exercise",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ExerciseListItem_exercise"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TraningJournalViewer"
};
})();
// prettier-ignore
(node: any).hash = '83327c2f6cce1326ec445dd4b8f66de0';
export default node;
