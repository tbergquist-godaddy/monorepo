/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ToggleWatched_data$ref: FragmentReference;
declare export opaque type ToggleWatched_data$fragmentType: ToggleWatched_data$ref;
export type ToggleWatched_data = {|
  +id: string,
  +watched: ?boolean,
  +$refType: ToggleWatched_data$ref,
|};
export type ToggleWatched_data$data = ToggleWatched_data;
export type ToggleWatched_data$key = {
  +$data?: ToggleWatched_data$data,
  +$fragmentRefs: ToggleWatched_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ToggleWatched_data",
  "type": "Episode",
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
      "name": "watched",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c8852a10e20b5d9996568a33fe57bda8';
module.exports = node;
