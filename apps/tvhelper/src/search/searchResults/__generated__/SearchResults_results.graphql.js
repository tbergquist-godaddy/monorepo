/**
 * @flow
 */

/* eslint-disable */

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
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResults_results",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TvShowEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TvShow",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "TvShowListItem_data"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvShowConnection",
  "abstractKey": null
};
// prettier-ignore
(node: any).hash = '551ef5468ff2f5ee7af497265c38cc9e';
export default node;
