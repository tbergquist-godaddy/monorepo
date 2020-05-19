/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type EditExercise_exercise$ref = any;
type ExerciseDetailCard_exercise$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseListItem_exercise$ref: FragmentReference;
declare export opaque type ExerciseListItem_exercise$fragmentType: ExerciseListItem_exercise$ref;
export type ExerciseListItem_exercise = {|
  +$fragmentRefs: ExerciseDetailCard_exercise$ref & EditExercise_exercise$ref,
  +$refType: ExerciseListItem_exercise$ref,
|};
export type ExerciseListItem_exercise$data = ExerciseListItem_exercise;
export type ExerciseListItem_exercise$key = {
  +$data?: ExerciseListItem_exercise$data,
  +$fragmentRefs: ExerciseListItem_exercise$ref,
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExerciseListItem_exercise",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ExerciseDetailCard_exercise"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EditExercise_exercise"
    }
  ],
  "type": "Exercise"
};
// prettier-ignore
(node: any).hash = 'a0c77deb7f4f91711f592a1573a767fe';
export default node;
