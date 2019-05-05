/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddExerciseForm_day$ref: FragmentReference;
declare export opaque type AddExerciseForm_day$fragmentType: AddExerciseForm_day$ref;
export type AddExerciseForm_day = {|
  +id: string,
  +$refType: AddExerciseForm_day$ref,
|};
export type AddExerciseForm_day$data = AddExerciseForm_day;
export type AddExerciseForm_day$key = {
  +$data?: AddExerciseForm_day$data,
  +$fragmentRefs: AddExerciseForm_day$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AddExerciseForm_day",
  "type": "Day",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'faa0e7b3158260147981e735564ead7c';
module.exports = node;
