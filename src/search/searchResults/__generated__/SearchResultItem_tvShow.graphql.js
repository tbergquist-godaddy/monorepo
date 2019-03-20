/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchResultItem_tvShow$ref: FragmentReference;
export type SearchResultItem_tvShow = {|
  +name: ?string,
  +rating: ?number,
  +$refType: SearchResultItem_tvShow$ref,
|};
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '70383b8effc967d915fa1c45e035dbbf';
module.exports = node;
