/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type Episode_episode$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Episodes_episodes$ref: FragmentReference;
declare export opaque type Episodes_episodes$fragmentType: Episodes_episodes$ref;
export type Episodes_episodes = {|
  +episodes: ?$ReadOnlyArray<?{|
    +id: string,
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
  "kind": "Fragment",
  "name": "Episodes_episodes",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "episodes",
      "storageKey": null,
      "args": null,
      "concreteType": "Episode",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Episode_episode",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = 'a22bde3b2493ef5400f453d751c9b9aa';
export default node;
