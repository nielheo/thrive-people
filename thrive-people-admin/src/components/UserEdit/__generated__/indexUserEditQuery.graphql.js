/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule indexUserEditQuery.graphql
 * @generated SignedSource<<c274e49c6e28ea4771a3da5652d6f092>>
 * @relayHash ef118ecaa82ee3a12f35e5569677f38b
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query indexUserEditQuery(
  $userId: String
) {
  viewer {
    ...UserEdit_viewer
    users(type: admin, id: $userId) {
      id
    }
  }
}

fragment UserEdit_viewer on Viewer {
  roles(type: admin) {
    id
    title
    isSuper
  }
  users(type: admin, id: $userId) {
    id
    email
    firstName
    lastName
    roles {
      id
      title
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "userId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "indexUserEditQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "args": null,
        "concreteType": "Viewer",
        "name": "__viewer_viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "UserEdit_viewer",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "userId",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "admin",
                "type": "Site!"
              }
            ],
            "concreteType": "User",
            "name": "users",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "indexUserEditQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "userId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "indexUserEditQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "type",
                "value": "admin",
                "type": "Site!"
              }
            ],
            "concreteType": "Role",
            "name": "roles",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "isSuper",
                "storageKey": null
              }
            ],
            "storageKey": "roles{\"type\":\"admin\"}"
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "userId",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "type",
                "value": "admin",
                "type": "Site!"
              }
            ],
            "concreteType": "User",
            "name": "users",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "firstName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "lastName",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Role",
                "name": "roles",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "title",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": null,
        "handle": "viewer",
        "name": "viewer",
        "key": "",
        "filters": null
      }
    ]
  },
  "text": "query indexUserEditQuery(\n  $userId: String\n) {\n  viewer {\n    ...UserEdit_viewer\n    users(type: admin, id: $userId) {\n      id\n    }\n  }\n}\n\nfragment UserEdit_viewer on Viewer {\n  roles(type: admin) {\n    id\n    title\n    isSuper\n  }\n  users(type: admin, id: $userId) {\n    id\n    email\n    firstName\n    lastName\n    roles {\n      id\n      title\n    }\n  }\n}\n"
};

module.exports = batch;
