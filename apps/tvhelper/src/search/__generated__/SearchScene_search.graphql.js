/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type SearchResults_results$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchScene_search$ref: FragmentReference;
declare export opaque type SearchScene_search$fragmentType: SearchScene_search$ref;
export type SearchScene_search = {|
  +searchTvShow?: ?{|
    +$fragmentRefs: SearchResults_results$ref
  |},
  +$refType: SearchScene_search$ref,
|};
export type SearchScene_search$data = SearchScene_search;
export type SearchScene_search$key = {
  +$data?: SearchScene_search$data,
  +$fragmentRefs: SearchScene_search$ref,
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "includeResults",
      "type": "Boolean"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "query",
      "type": "String!"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchScene_search",
  "selections": [
    {
      "condition": "includeResults",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Variable",
              "name": "query",
              "variableName": "query"
            }
          ],
          "concreteType": "TvShowConnection",
          "kind": "LinkedField",
          "name": "searchTvShow",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SearchResults_results"
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "RootQuery"
};
// prettier-ignore
(node: any).hash = '60dc4076525392cc2d7aac9dceb396e2';
export default node;
