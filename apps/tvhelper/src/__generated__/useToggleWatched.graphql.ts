/**
 * @generated SignedSource<<207c2d55302a49e5653970fde7c708b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useToggleWatched$data = {
  readonly id: string;
  readonly watched: boolean | null;
  readonly " $fragmentType": "useToggleWatched";
};
export type useToggleWatched$key = {
  readonly " $data"?: useToggleWatched$data;
  readonly " $fragmentSpreads": FragmentRefs<"useToggleWatched">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useToggleWatched"
};

(node as any).hash = "3846014de45bd62cfc6dc677c18d5f7d";

export default node;
