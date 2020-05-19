/**
 * @flow
 */

/* eslint-disable */

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddProgramForm_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TraningJournalViewer"
};
// prettier-ignore
(node: any).hash = '67359c53190da49c6af2205f9c8628e5';
export default node;
