/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TvShowListItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchResults_results$ref: FragmentReference;
declare export opaque type SearchResults_results$fragmentType: SearchResults_results$ref;
export type SearchResults_results = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: TvShowListItem_data$ref,
    |}
  |}>,
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
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TvShowEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "TvShow",
          "plural": false,
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
              "name": "TvShowListItem_data",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '551ef5468ff2f5ee7af497265c38cc9e';
module.exports = node;
