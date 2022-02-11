/**
 * @generated SignedSource<<1868eedcbf4d804702c49a85dcda4c84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TvShowPage_tvShow$data = {
  readonly name: string | null;
  readonly network: {
    readonly name: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"toggleFavoriteButton" | "Episodes_episodes" | "imageSummary">;
  readonly " $fragmentType": "TvShowPage_tvShow";
};
export type TvShowPage_tvShow$key = {
  readonly " $data"?: TvShowPage_tvShow$data;
  readonly " $fragmentSpreads": FragmentRefs<"TvShowPage_tvShow">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "toggleFavoriteButton"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Episodes_episodes"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "imageSummary"
    }
  ],
  "type": "TvShow",
  "abstractKey": null
};
})();

(node as any).hash = "e5f5465123646dfad0efb81333a2c1e6";

export default node;
