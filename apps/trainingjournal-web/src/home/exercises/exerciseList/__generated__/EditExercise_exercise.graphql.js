/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditExercise_exercise$ref: FragmentReference;
declare export opaque type EditExercise_exercise$fragmentType: EditExercise_exercise$ref;
export type EditExercise_exercise = {|
  +id: string,
  +name: ?string,
  +muscleGroups: ?string,
  +videoUrl: ?string,
  +description: ?string,
  +$refType: EditExercise_exercise$ref,
|};
export type EditExercise_exercise$data = EditExercise_exercise;
export type EditExercise_exercise$key = {
  +$data?: EditExercise_exercise$data,
  +$fragmentRefs: EditExercise_exercise$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "EditExercise_exercise",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "videoUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = 'cb14f2bbe70d3a3c5040e8a4ab71de00';
export default node;
