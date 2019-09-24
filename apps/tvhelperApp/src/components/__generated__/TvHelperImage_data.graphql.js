/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvHelperImage_data$ref: FragmentReference;
declare export opaque type TvHelperImage_data$fragmentType: TvHelperImage_data$ref;
export type TvHelperImage_data = {|
  +medium: ?string,
  +original: ?string,
  +$refType: TvHelperImage_data$ref,
|};
export type TvHelperImage_data$data = TvHelperImage_data;
export type TvHelperImage_data$key = {
  +$data?: TvHelperImage_data$data,
  +$fragmentRefs: TvHelperImage_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TvHelperImage_data",
  "type": "TvHelperImage",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "medium",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "original",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ba04a674e06eec94d15111369ea96e50';
module.exports = node;
