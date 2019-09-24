/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type EpisodeItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EpisodeList_data$ref: FragmentReference;
declare export opaque type EpisodeList_data$fragmentType: EpisodeList_data$ref;
export type EpisodeList_data = {|
  +episodes: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: EpisodeItem_data$ref,
  |}>,
  +$refType: EpisodeList_data$ref,
|};
export type EpisodeList_data$data = EpisodeList_data;
export type EpisodeList_data$key = {
  +$data?: EpisodeList_data$data,
  +$fragmentRefs: EpisodeList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "EpisodeList_data",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "episodes",
      "storageKey": null,
      "args": null,
      "concreteType": "Episode",
      "plural": true,
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
          "name": "EpisodeItem_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2b561513c1d4b65f7a80b12a81f6a77a';
module.exports = node;
