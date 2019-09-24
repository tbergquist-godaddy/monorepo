/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ToggleWatched_data$ref = any;
type TvHelperImage_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Episode_data$ref: FragmentReference;
declare export opaque type Episode_data$fragmentType: Episode_data$ref;
export type Episode_data = {|
  +name: ?string,
  +summary: ?string,
  +image: ?{|
    +$fragmentRefs: TvHelperImage_data$ref
  |},
  +$fragmentRefs: ToggleWatched_data$ref,
  +$refType: Episode_data$ref,
|};
export type Episode_data$data = Episode_data;
export type Episode_data$key = {
  +$data?: Episode_data$data,
  +$fragmentRefs: Episode_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Episode_data",
  "type": "Episode",
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
      "name": "summary",
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
          "kind": "FragmentSpread",
          "name": "TvHelperImage_data",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ToggleWatched_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '93709cf7620c3574b294379131bc472b';
module.exports = node;
