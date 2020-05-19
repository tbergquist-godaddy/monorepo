/**
 * @flow
 */

/* eslint-disable */

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Episode_episode",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "watched",
      "storageKey": null
    }
  ],
  "type": "Episode"
};
// prettier-ignore
(node: any).hash = 'b37a76627f44969c23b45279d8831218';
export default node;
