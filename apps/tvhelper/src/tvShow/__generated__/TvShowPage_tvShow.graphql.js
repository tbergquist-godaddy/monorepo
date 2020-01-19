/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type Episodes_episodes$ref = any;
type TvShowImage_tvShow$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowPage_tvShow$ref: FragmentReference;
declare export opaque type TvShowPage_tvShow$fragmentType: TvShowPage_tvShow$ref;
export type TvShowPage_tvShow = {|
  +name: ?string,
  +network: ?{|
    +name: ?string
  |},
  +summary: ?string,
  +$fragmentRefs: TvShowImage_tvShow$ref & Episodes_episodes$ref,
  +$refType: TvShowPage_tvShow$ref,
|};
export type TvShowPage_tvShow$data = TvShowPage_tvShow;
export type TvShowPage_tvShow$key = {
  +$data?: TvShowPage_tvShow$data,
  +$fragmentRefs: TvShowPage_tvShow$ref,
  ...
};


const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "TvShowPage_tvShow",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "network",
      "storageKey": null,
      "args": null,
      "concreteType": "Network",
      "plural": false,
      "selections": [
        (v0/*: any*/)
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
          "value": false
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
})();
// prettier-ignore
(node: any).hash = 'ee9fd474fa23f7051d10d661ca217950';
export default node;
