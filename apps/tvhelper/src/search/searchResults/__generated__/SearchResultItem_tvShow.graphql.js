/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchResultItem_tvShow$ref: FragmentReference;
declare export opaque type SearchResultItem_tvShow$fragmentType: SearchResultItem_tvShow$ref;
export type SearchResultItem_tvShow = {|
  +name: ?string,
  +rating: ?number,
  +id: ?string,
  +$refType: SearchResultItem_tvShow$ref,
|};
export type SearchResultItem_tvShow$data = SearchResultItem_tvShow;
export type SearchResultItem_tvShow$key = {
  +$data?: SearchResultItem_tvShow$data,
  +$fragmentRefs: SearchResultItem_tvShow$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SearchResultItem_tvShow",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "rating",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9c144a68d278a0217e873f8b2ca872d0';
module.exports = node;
