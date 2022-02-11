/**
 * @generated SignedSource<<4b29dc1afb13a9681c4b630f67751f5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type episodeListItem$data = {
  readonly id: string;
  readonly name: string | null;
  readonly seasonAndNumber: string | null;
  readonly airdate: any | null;
  readonly summary: string | null;
  readonly watched: boolean | null;
  readonly tvShow: {
    readonly name: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"useToggleWatched">;
  readonly " $fragmentType": "episodeListItem";
};
export type episodeListItem$key = {
  readonly " $data"?: episodeListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"episodeListItem">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
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
  "name": "episodeListItem",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
    (v2/*: any*/),
    {
      "kind": "InlineDataFragmentSpread",
      "name": "useToggleWatched",
      "selections": [
        (v0/*: any*/),
        (v2/*: any*/)
      ]
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TvShow",
      "kind": "LinkedField",
      "name": "tvShow",
      "plural": false,
      "selections": [
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
})();

(node as any).hash = "1ec77f441023bb85087df64023bf015a";

export default node;
