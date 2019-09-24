/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Summary_data$ref: FragmentReference;
declare export opaque type Summary_data$fragmentType: Summary_data$ref;
export type Summary_data = {|
  +summary: ?string,
  +$refType: Summary_data$ref,
|};
export type Summary_data$data = Summary_data;
export type Summary_data$key = {
  +$data?: Summary_data$data,
  +$fragmentRefs: Summary_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Summary_data",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "summary",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1667a1087c4334e4af14c7885927a56b';
module.exports = node;
