/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Episodes_episodes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowPage_tvShow$ref: FragmentReference;
export type TvShowPage_tvShow = {|
  +name: ?string,
  +image: ?{|
    +original: ?string
  |},
  +summary: ?string,
  +$fragmentRefs: Episodes_episodes$ref,
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
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "TvHelperImage",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "original",
          "args": null,
          "storageKey": null
        }
      ]
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
      "name": "Episodes_episodes",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8a83241824d4868b4ad0d80c6d36a730';
module.exports = node;
