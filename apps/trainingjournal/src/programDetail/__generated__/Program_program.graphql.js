/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Weeks_program$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Program_program$ref: FragmentReference;
export type Program_program = {|
  +name: ?string,
  +$fragmentRefs: Weeks_program$ref,
  +$refType: Program_program$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Program_program",
  "type": "Program",
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
      "name": "Weeks_program",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'eb2c9525a39739862262966608867a74';
module.exports = node;
