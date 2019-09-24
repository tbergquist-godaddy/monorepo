/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EpisodeItem_data$ref: FragmentReference;
declare export opaque type EpisodeItem_data$fragmentType: EpisodeItem_data$ref;
export type EpisodeItem_data = {|
  +id: string,
  +seasonAndNumber: ?string,
  +name: ?string,
  +airdate: ?any,
  +watched: ?boolean,
  +$refType: EpisodeItem_data$ref,
|};
export type EpisodeItem_data$data = EpisodeItem_data;
export type EpisodeItem_data$key = {
  +$data?: EpisodeItem_data$data,
  +$fragmentRefs: EpisodeItem_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "EpisodeItem_data",
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
      "name": "seasonAndNumber",
      "args": null,
      "storageKey": null
    },
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
      "name": "airdate",
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
(node/*: any*/).hash = '283672a88beeadc4113e47651c3720ff';
module.exports = node;
