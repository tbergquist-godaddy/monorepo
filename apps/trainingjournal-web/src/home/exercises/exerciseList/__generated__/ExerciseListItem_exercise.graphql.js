/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseListItem_exercise$ref: FragmentReference;
declare export opaque type ExerciseListItem_exercise$fragmentType: ExerciseListItem_exercise$ref;
export type ExerciseListItem_exercise = {|
  +name: ?string,
  +$refType: ExerciseListItem_exercise$ref,
|};
export type ExerciseListItem_exercise$data = ExerciseListItem_exercise;
export type ExerciseListItem_exercise$key = {
  +$data?: ExerciseListItem_exercise$data,
  +$fragmentRefs: ExerciseListItem_exercise$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ExerciseListItem_exercise",
  "type": "Exercise",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = '6fd3309e05f89966d229460cb65d6d49';
export default node;
