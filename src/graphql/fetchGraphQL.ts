import config from 'config';
import { GraphQLResponse } from '@libs/graphql';

const fetchGraphQL = async (
  text: string,
  variables: Record<string, unknown>,
): Promise<GraphQLResponse> => {
  try {
    const response = await fetch(`${config.url}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });

    // Get the response as JSON
    return response.json();
  } catch (ex) {
    return {
      errors: [{
        message: ex.message,
      }],
    };
  }
};

export default fetchGraphQL;
