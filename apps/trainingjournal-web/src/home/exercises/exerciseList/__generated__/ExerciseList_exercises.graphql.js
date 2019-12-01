/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type ExerciseListItem_exercise$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseList_exercises$ref: FragmentReference;
declare export opaque type ExerciseList_exercises$fragmentType: ExerciseList_exercises$ref;
export type ExerciseList_exercises = {|
  +exercises: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ExerciseListItem_exercise$ref,
      |}
    |}>
  |},
  +$refType: ExerciseList_exercises$ref,
|};
export type ExerciseList_exercises$data = ExerciseList_exercises;
export type ExerciseList_exercises$key = {
  +$data?: ExerciseList_exercises$data,
  +$fragmentRefs: ExerciseList_exercises$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ExerciseList_exercises",
  "type": "TraningJournalViewer",
  "metadata": null,
  "argumentDefinitions": [],
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
                  "kind": "FragmentSpread",
                  "name": "ExerciseListItem_exercise",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '33f4c684ada811b9fadf7c9e46a742d0';
export default node;
