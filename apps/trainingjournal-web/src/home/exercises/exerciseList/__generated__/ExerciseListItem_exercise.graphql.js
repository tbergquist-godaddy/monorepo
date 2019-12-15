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
  +id: string,
  +name: ?string,
  +muscleGroups: ?string,
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
(node: any).hash = '19c58bcdefff98596d0f1384b070e3a0';
export default node;
