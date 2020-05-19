/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type Episode_episode$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Episodes_episodes$ref: FragmentReference;
declare export opaque type Episodes_episodes$fragmentType: Episodes_episodes$ref;
export type Episodes_episodes = {|
  +episodes: ?$ReadOnlyArray<?{|
    +id: string,
    +seasonAndNumber: ?string,
    +$fragmentRefs: Episode_episode$ref,
  |}>,
  +$refType: Episodes_episodes$ref,
|};
export type Episodes_episodes$data = Episodes_episodes;
export type Episodes_episodes$key = {
  +$data?: Episodes_episodes$data,
  +$fragmentRefs: Episodes_episodes$ref,
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Episodes_episodes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "episodes",
      "plural": true,
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
          "name": "seasonAndNumber",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Episode_episode"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvShow"
};
// prettier-ignore
(node: any).hash = 'c31dfb8b38dfcd39b29d480557854c1a';
export default node;
