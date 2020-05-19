/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type TvShowImage_tvShow$ref = any;
export type TvShowImageTestQueryVariables = {|
  id: string
|};
export type TvShowImageTestQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: TvShowImage_tvShow$ref
  |}
|};
export type TvShowImageTestQuery = {|
  variables: TvShowImageTestQueryVariables,
  response: TvShowImageTestQueryResponse,
|};

/*
query TvShowImageTestQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...TvShowImage_tvShow
    id
  }
}

fragment TvShowImage_tvShow on TvShow {
  id
  name
  image {
    original
    id
  }
  isFavorite
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TvShowImageTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TvShowImage_tvShow"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TvShowImageTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
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
                "concreteType": "TvHelperImage",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "original",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFavorite",
                "storageKey": null
              }
            ],
            "type": "TvShow"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "node": {
          "type": "Node",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "node.name": (v3/*: any*/),
        "node.image": {
          "type": "TvHelperImage",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "node.isFavorite": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "node.image.original": (v3/*: any*/),
        "node.image.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        }
      }
    },
    "name": "TvShowImageTestQuery",
    "operationKind": "query",
    "text": "query TvShowImageTestQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TvShowImage_tvShow\n    id\n  }\n}\n\nfragment TvShowImage_tvShow on TvShow {\n  id\n  name\n  image {\n    original\n    id\n  }\n  isFavorite\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '2f1b739e930c96736592386597507480';
export default node;
