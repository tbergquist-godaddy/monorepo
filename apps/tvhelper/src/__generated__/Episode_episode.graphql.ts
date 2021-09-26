/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Episode_episode = {
    readonly name: string | null;
    readonly seasonAndNumber: string | null;
    readonly airdate: unknown | null;
    readonly summary: string | null;
    readonly watched: boolean | null;
    readonly " $fragmentRefs": FragmentRefs<"useToggleWatched">;
    readonly " $refType": "Episode_episode";
};
export type Episode_episode$data = Episode_episode;
export type Episode_episode$key = {
    readonly " $data"?: Episode_episode$data;
    readonly " $fragmentRefs": FragmentRefs<"Episode_episode">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "watched",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Episode_episode",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "seasonAndNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "airdate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "InlineDataFragmentSpread",
      "name": "useToggleWatched",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/)
      ]
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
})();
(node as any).hash = 'f7591c6cbe86c4bf5169cb641db01992';
export default node;
