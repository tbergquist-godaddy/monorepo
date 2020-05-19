/**
 * @flow
 */

/* eslint-disable */

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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TvShowPage_tvShow",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Network",
      "kind": "LinkedField",
      "name": "network",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "stripTags",
          "value": false
        }
      ],
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": "summary(stripTags:false)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TvShowImage_tvShow"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Episodes_episodes"
    }
  ],
  "type": "TvShow"
};
})();
// prettier-ignore
(node: any).hash = 'ee9fd474fa23f7051d10d661ca217950';
export default node;
