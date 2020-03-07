/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
  "kind": "Fragment",
  "name": "SearchScene_search",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "includeResults",
      "type": "Boolean",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "String!",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "includeResults",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "searchTvShow",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "query",
              "variableName": "query"
            }
          ],
          "concreteType": "TvShowConnection",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SearchResults_results",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '60dc4076525392cc2d7aac9dceb396e2';
export default node;
