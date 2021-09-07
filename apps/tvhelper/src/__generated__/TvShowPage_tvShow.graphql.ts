/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TvShowPage_tvShow = {
    readonly name: string | null;
    readonly network: {
        readonly name: string | null;
    } | null;
    readonly summary: string | null;
    readonly " $fragmentRefs": FragmentRefs<"TvShowImage_tvShow" | "Episodes_episodes">;
    readonly " $refType": "TvShowPage_tvShow";
};
export type TvShowPage_tvShow$data = TvShowPage_tvShow;
export type TvShowPage_tvShow$key = {
    readonly " $data"?: TvShowPage_tvShow$data;
    readonly " $fragmentRefs": FragmentRefs<"TvShowPage_tvShow">;
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
  "type": "TvShow",
  "abstractKey": null
};
})();
(node as any).hash = 'ee9fd474fa23f7051d10d661ca217950';
export default node;
