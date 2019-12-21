/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Episode_episode$ref: FragmentReference;
declare export opaque type Episode_episode$fragmentType: Episode_episode$ref;
export type Episode_episode = {|
  +id: string,
  +name: ?string,
  +seasonAndNumber: ?string,
  +airdate: ?any,
  +summary: ?string,
  +watched: ?boolean,
  +$refType: Episode_episode$ref,
|};
export type Episode_episode$data = Episode_episode;
export type Episode_episode$key = {
  +$data?: Episode_episode$data,
  +$fragmentRefs: Episode_episode$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Episode_episode",
  "type": "Episode",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "seasonAndNumber",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "airdate",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "summary",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "watched",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = 'b37a76627f44969c23b45279d8831218';
export default node;
