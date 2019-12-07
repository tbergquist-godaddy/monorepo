/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddExerciseForm_user$ref: FragmentReference;
declare export opaque type AddExerciseForm_user$fragmentType: AddExerciseForm_user$ref;
export type AddExerciseForm_user = {|
  +id?: string,
  +$refType: AddExerciseForm_user$ref,
|};
export type AddExerciseForm_user$data = AddExerciseForm_user;
export type AddExerciseForm_user$key = {
  +$data?: AddExerciseForm_user$data,
  +$fragmentRefs: AddExerciseForm_user$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "AddExerciseForm_user",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "TraningJournalViewer",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '4e58068a1a593bdce8e1c90fb87fd834';
export default node;
