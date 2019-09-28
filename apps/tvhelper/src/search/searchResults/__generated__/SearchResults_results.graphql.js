/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TvShowList_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchResults_results$ref: FragmentReference;
declare export opaque type SearchResults_results$fragmentType: SearchResults_results$ref;
export type SearchResults_results = {|
  +$fragmentRefs: TvShowList_data$ref,
  +$refType: SearchResults_results$ref,
|};
export type SearchResults_results$data = SearchResults_results;
export type SearchResults_results$key = {
  +$data?: SearchResults_results$data,
  +$fragmentRefs: SearchResults_results$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SearchResults_results",
  "type": "TvShowConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TvShowList_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5ae348488a9390bd69ba5236cc45b7b4';
module.exports = node;
