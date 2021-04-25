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
    medium
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
    "name": "id"
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
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
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
    "type": "RootQuery",
    "abstractKey": null
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
                    "name": "medium",
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
            "type": "TvShow",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9f900fc335d79134a740dc935de76f8f",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Node"
        },
        "node.__typename": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
        "node.id": (v3/*: any*/),
        "node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TvHelperImage"
        },
        "node.image.id": (v3/*: any*/),
        "node.image.medium": (v4/*: any*/),
        "node.isFavorite": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "node.name": (v4/*: any*/)
      }
    },
    "name": "TvShowImageTestQuery",
    "operationKind": "query",
    "text": "query TvShowImageTestQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TvShowImage_tvShow\n    id\n  }\n}\n\nfragment TvShowImage_tvShow on TvShow {\n  id\n  name\n  image {\n    medium\n    id\n  }\n  isFavorite\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '2f1b739e930c96736592386597507480';
export default node;
