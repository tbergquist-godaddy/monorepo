/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Cast_data$ref = any;
type EpisodeList_data$ref = any;
type Summary_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvDetail_data$ref: FragmentReference;
declare export opaque type TvDetail_data$fragmentType: TvDetail_data$ref;
export type TvDetail_data = {|
  +isFavorite: ?boolean,
  +image: ?{|
    +original: ?string
  |},
  +$fragmentRefs: Summary_data$ref & EpisodeList_data$ref & Cast_data$ref,
  +$refType: TvDetail_data$ref,
|};
export type TvDetail_data$data = TvDetail_data;
export type TvDetail_data$key = {
  +$data?: TvDetail_data$data,
  +$fragmentRefs: TvDetail_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TvDetail_data",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isFavorite",
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
          "name": "original",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "Summary_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "EpisodeList_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Cast_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '60ee34d5618601c20ccdab8fefcb31e4';
module.exports = node;
