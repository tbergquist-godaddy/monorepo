/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramListItem_program$ref: FragmentReference;
declare export opaque type ProgramListItem_program$fragmentType: ProgramListItem_program$ref;
export type ProgramListItem_program = {|
  +name: ?string,
  +date: ?any,
  +$refType: ProgramListItem_program$ref,
|};
export type ProgramListItem_program$data = ProgramListItem_program;
export type ProgramListItem_program$key = {
  +$data?: ProgramListItem_program$data,
  +$fragmentRefs: ProgramListItem_program$ref,
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProgramListItem_program",
  "selections": [
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
      "name": "date",
      "storageKey": null
    }
  ],
  "type": "Program"
};
// prettier-ignore
(node: any).hash = '2f6bbd29b90267fe466e256f99547474';
export default node;
