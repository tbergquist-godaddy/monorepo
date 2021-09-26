/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type actionBar = {
    readonly watched: boolean | null;
    readonly " $fragmentRefs": FragmentRefs<"useToggleWatched">;
    readonly " $refType": "actionBar";
};
export type actionBar$data = actionBar;
export type actionBar$key = {
    readonly " $data"?: actionBar$data;
    readonly " $fragmentRefs": FragmentRefs<"actionBar">;
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
  "name": "actionBar",
  "selections": [
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
(node as any).hash = '461f06976bf91e481a11d9b28d9b5191';
export default node;
