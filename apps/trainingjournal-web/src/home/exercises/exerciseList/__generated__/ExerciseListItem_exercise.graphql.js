/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type ExerciseDetailCard_exercise$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseListItem_exercise$ref: FragmentReference;
declare export opaque type ExerciseListItem_exercise$fragmentType: ExerciseListItem_exercise$ref;
export type ExerciseListItem_exercise = {|
  +$fragmentRefs: ExerciseDetailCard_exercise$ref,
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
    }
  ]
};
// prettier-ignore
(node: any).hash = '24178d4e48769b9ade45f80552c28e2c';
export default node;
