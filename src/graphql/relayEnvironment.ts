import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
  GraphQLResponse,
} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
const fetchRelay = async (
  params: RequestParameters,
  variables: Variables,
): Promise<GraphQLResponse> => {
  if (!params.text) throw new Error();
  return fetchGraphQL(params.text, variables);
};

const network = Network.create(fetchRelay);
const store = new Store(new RecordSource());

// Export a singleton instance of Relay Environment configured with our network function:
const environment = new Environment({
  network,
  store,
});

export default environment;
