/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AddExerciseForm_day$ref = any;
type ExerciseTable_day$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DayDetail_day$ref: FragmentReference;
declare export opaque type DayDetail_day$fragmentType: DayDetail_day$ref;
export type DayDetail_day = {|
  +name: ?string,
  +$fragmentRefs: ExerciseTable_day$ref & AddExerciseForm_day$ref,
  +$refType: DayDetail_day$ref,
|};
export type DayDetail_day$data = DayDetail_day;
export type DayDetail_day$key = {
  +$data?: DayDetail_day$data,
  +$fragmentRefs: DayDetail_day$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DayDetail_day",
  "type": "Day",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ExerciseTable_day",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AddExerciseForm_day",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0129c21f0d4c46c28fe8920ebab52bf6';
module.exports = node;
