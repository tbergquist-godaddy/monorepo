/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddProgramForm_user$ref: FragmentReference;
declare export opaque type AddProgramForm_user$fragmentType: AddProgramForm_user$ref;
export type AddProgramForm_user = {|
  +id: string,
  +$refType: AddProgramForm_user$ref,
|};
export type AddProgramForm_user$data = AddProgramForm_user;
export type AddProgramForm_user$key = {
  +$data?: AddProgramForm_user$data,
  +$fragmentRefs: AddProgramForm_user$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "AddProgramForm_user",
  "type": "TraningJournalViewer",
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
(node: any).hash = '67359c53190da49c6af2205f9c8628e5';
export default node;
