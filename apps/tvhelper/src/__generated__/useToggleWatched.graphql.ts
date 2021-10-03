/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useToggleWatched = {
    readonly id: string;
    readonly watched: boolean | null;
    readonly " $refType": "useToggleWatched";
};
export type useToggleWatched$data = useToggleWatched;
export type useToggleWatched$key = {
    readonly " $data"?: useToggleWatched$data;
    readonly " $fragmentRefs": FragmentRefs<"useToggleWatched">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useToggleWatched"
};
(node as any).hash = '3846014de45bd62cfc6dc677c18d5f7d';
export default node;
