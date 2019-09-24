/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CastItem_data$ref: FragmentReference;
declare export opaque type CastItem_data$fragmentType: CastItem_data$ref;
export type CastItem_data = {|
  +person: ?{|
    +name: ?string,
    +image: ?{|
      +medium: ?string
    |},
  |},
  +character: ?{|
    +name: ?string,
    +image: ?{|
      +medium: ?string
    |},
  |},
  +$refType: CastItem_data$ref,
|};
export type CastItem_data$data = CastItem_data;
export type CastItem_data$key = {
  +$data?: CastItem_data$data,
  +$fragmentRefs: CastItem_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "image",
    "storageKey": null,
    "args": null,
    "concreteType": "TvHelperImage",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "medium",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "CastItem_data",
  "type": "Cast",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "person",
      "storageKey": null,
      "args": null,
      "concreteType": "Person",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "character",
      "storageKey": null,
      "args": null,
      "concreteType": "Person",
      "plural": false,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a5d91b0c97af33d13e2aec5f41eb659c';
module.exports = node;
