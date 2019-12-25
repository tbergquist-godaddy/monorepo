/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
  "kind": "Fragment",
  "name": "ExerciseListItem_exercise",
  "type": "Exercise",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ExerciseDetailCard_exercise",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "EditExercise_exercise",
      "args": null
    }
  ]
};
// prettier-ignore
(node: any).hash = 'a0c77deb7f4f91711f592a1573a767fe';
export default node;
