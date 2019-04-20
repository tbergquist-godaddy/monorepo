/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Episodes_episodes$ref = any;
type TvShowImage_tvShow$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowPage_tvShow$ref: FragmentReference;
export type TvShowPage_tvShow = {|
  +name: ?string,
  +summary: ?string,
  +$fragmentRefs: TvShowImage_tvShow$ref & Episodes_episodes$ref,
  +$refType: TvShowPage_tvShow$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TvShowPage_tvShow",
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
      "name": "summary",
      "args": [
        {
          "kind": "Literal",
          "name": "stripTags",
          "value": false,
          "type": "Boolean"
        }
      ],
      "storageKey": "summary(stripTags:false)"
    },
    {
      "kind": "FragmentSpread",
      "name": "TvShowImage_tvShow",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Episodes_episodes",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e344a4c30160f9a67ac3145e608236a2';
module.exports = node;
