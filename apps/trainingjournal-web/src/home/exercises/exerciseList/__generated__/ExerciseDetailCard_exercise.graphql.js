/**
 * @flow
 */

/* eslint-disable */

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExerciseDetailCard_exercise",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "name": "muscleGroups",
      "storageKey": null
    }
  ],
  "type": "Exercise"
};
// prettier-ignore
(node: any).hash = 'cc7fa8a42129c64091e0092cd535b1c6';
export default node;
