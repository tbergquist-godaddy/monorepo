/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseDetailCard_exercise$ref: FragmentReference;
declare export opaque type ExerciseDetailCard_exercise$fragmentType: ExerciseDetailCard_exercise$ref;
export type ExerciseDetailCard_exercise = {|
  +id: string,
  +name: ?string,
  +muscleGroups: ?string,
  +$refType: ExerciseDetailCard_exercise$ref,
|};
export type ExerciseDetailCard_exercise$data = ExerciseDetailCard_exercise;
export type ExerciseDetailCard_exercise$key = {
  +$data?: ExerciseDetailCard_exercise$data,
  +$fragmentRefs: ExerciseDetailCard_exercise$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ExerciseDetailCard_exercise",
  "type": "Exercise",
  "metadata": null,
  "argumentDefinitions": [],
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "muscleGroups",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = 'cc7fa8a42129c64091e0092cd535b1c6';
export default node;
