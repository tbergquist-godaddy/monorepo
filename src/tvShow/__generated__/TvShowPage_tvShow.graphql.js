/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowPage_tvShow$ref: FragmentReference;
export type TvShowPage_tvShow = {|
  +name: ?string,
  +image: ?{|
    +original: ?string
  |},
  +summary: ?string,
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f0d6b7190541c52d9b46129312f8fded';
module.exports = node;
