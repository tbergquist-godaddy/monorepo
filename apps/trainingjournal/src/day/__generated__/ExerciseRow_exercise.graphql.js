/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseRow_exercise$ref: FragmentReference;
declare export opaque type ExerciseRow_exercise$fragmentType: ExerciseRow_exercise$ref;
export type ExerciseRow_exercise = {|
  +set: ?string,
  +reps: ?string,
  +breakTime: ?string,
  +baseExercise: ?{|
    +name: ?string
  |},
  +$refType: ExerciseRow_exercise$ref,
|};
export type ExerciseRow_exercise$data = ExerciseRow_exercise;
export type ExerciseRow_exercise$key = {
  +$data?: ExerciseRow_exercise$data,
  +$fragmentRefs: ExerciseRow_exercise$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ExerciseRow_exercise",
  "type": "Exercise",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "set",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "reps",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "breakTime",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "baseExercise",
      "storageKey": null,
      "args": null,
      "concreteType": "BaseExercise",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f492a3a79b7c019ed777beaa2eaa4c69';
module.exports = node;
