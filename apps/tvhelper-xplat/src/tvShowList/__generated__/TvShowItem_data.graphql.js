/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowItem_data$ref: FragmentReference;
declare export opaque type TvShowItem_data$fragmentType: TvShowItem_data$ref;
export type TvShowItem_data = {|
  +id: string,
  +name: ?string,
  +status: ?string,
  +rating: ?number,
  +image: ?{|
    +medium: ?string
  |},
  +$refType: TvShowItem_data$ref,
|};
export type TvShowItem_data$data = TvShowItem_data;
export type TvShowItem_data$key = {
  +$data?: TvShowItem_data$data,
  +$fragmentRefs: TvShowItem_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TvShowItem_data",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rating",
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
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'da3ad055d31761d07ae48d93c4966f47';
module.exports = node;
