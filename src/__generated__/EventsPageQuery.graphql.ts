/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type Roles = "Organizer" | "Participant" | "%future added value";
export type EventsPageQueryVariables = {};
export type EventsPageQueryResponse = {
    readonly events: ReadonlyArray<{
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
    }>;
};
export type EventsPageQuery = {
    readonly response: EventsPageQueryResponse;
    readonly variables: EventsPageQueryVariables;
};



/*
query EventsPageQuery {
  events {
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "events",
    "plural": true,
    "selections": [
      (v0/*: any*/),
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
          (v0/*: any*/),
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
              (v0/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EventsPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EventsPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e24f9277fd9cce09b4607f38f0716f93",
    "id": null,
    "metadata": {},
    "name": "EventsPageQuery",
    "operationKind": "query",
    "text": "query EventsPageQuery {\n  events {\n    id\n    title\n    dateAndTime\n    description\n    address {\n      id\n      address1\n      address2\n    }\n    participants {\n      role\n      user {\n        id\n        email\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ae0dfe883951e808de70734361eb3ab2';
export default node;
