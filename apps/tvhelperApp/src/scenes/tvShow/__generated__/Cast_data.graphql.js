/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CastItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Cast_data$ref: FragmentReference;
declare export opaque type Cast_data$fragmentType: Cast_data$ref;
export type Cast_data = {|
  +cast: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: CastItem_data$ref,
  |}>,
  +$refType: Cast_data$ref,
|};
export type Cast_data$data = Cast_data;
export type Cast_data$key = {
  +$data?: Cast_data$data,
  +$fragmentRefs: Cast_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Cast_data",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "cast",
      "storageKey": null,
      "args": null,
      "concreteType": "Cast",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "CastItem_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5a48a9317dcb999d04c9c8977ab21421';
module.exports = node;
