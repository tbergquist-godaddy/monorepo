/**
 * @flow
 */

/* eslint-disable */

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditExercise_exercise",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "videoUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Exercise"
};
// prettier-ignore
(node: any).hash = 'cb14f2bbe70d3a3c5040e8a4ab71de00';
export default node;
