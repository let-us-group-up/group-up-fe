/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Roles = "Organizer" | "Participant" | "%future added value";
export type NextEventViewQueryVariables = {
    id: string;
};
export type NextEventViewQueryResponse = {
    readonly event: {
        readonly id: string;
        readonly title: string;
        readonly dateAndTime: unknown | null;
        readonly description: string | null;
        readonly address: {
            readonly id: string;
            readonly address1: string;
            readonly address2: string;
        } | null;
        readonly participants: ReadonlyArray<{
            readonly role: Roles;
            readonly user: {
                readonly id: string;
                readonly email: string;
            } | null;
        }>;
    } | null;
};
export type NextEventViewQuery = {
    readonly response: NextEventViewQueryResponse;
    readonly variables: NextEventViewQueryVariables;
};



/*
query NextEventViewQuery(
  $id: ID!
) {
  event(id: $id) {
    id
    title
    dateAndTime
    description
    address {
      id
      address1
      address2
    }
    participants {
      role
      user {
        id
        email
      }
    }
  }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "event",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateAndTime",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Address",
        "kind": "LinkedField",
        "name": "address",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address1",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address2",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Participant",
        "kind": "LinkedField",
        "name": "participants",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "role",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NextEventViewQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NextEventViewQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d32e634057a3adfdd5db5513920f8778",
    "id": null,
    "metadata": {},
    "name": "NextEventViewQuery",
    "operationKind": "query",
    "text": "query NextEventViewQuery(\n  $id: ID!\n) {\n  event(id: $id) {\n    id\n    title\n    dateAndTime\n    description\n    address {\n      id\n      address1\n      address2\n    }\n    participants {\n      role\n      user {\n        id\n        email\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'defff02b94e58d2efd02d37ec6cdfc9c';
export default node;
