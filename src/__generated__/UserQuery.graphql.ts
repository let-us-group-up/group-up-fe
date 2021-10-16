/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserQueryVariables = {};
export type UserQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly email: string;
    } | null;
};
export type UserQuery = {
    readonly response: UserQueryResponse;
    readonly variables: UserQueryVariables;
};



/*
query UserQuery {
  user(id: "6060cf5da9c9c12a83bc05a5") {
    id
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "6060cf5da9c9c12a83bc05a5"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
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
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": "user(id:\"6060cf5da9c9c12a83bc05a5\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2f9d6b9095cdebb97f3f8faeae6ed755",
    "id": null,
    "metadata": {},
    "name": "UserQuery",
    "operationKind": "query",
    "text": "query UserQuery {\n  user(id: \"6060cf5da9c9c12a83bc05a5\") {\n    id\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '8a83c7883eeb27e73ddfd16e87ff6516';
export default node;
