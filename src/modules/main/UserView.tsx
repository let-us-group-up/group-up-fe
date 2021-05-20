import { graphql } from 'react-relay';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { AppQuery } from 'graphql-types/AppQuery.graphql';

const userQuery = graphql`
  query AppQuery($id: ID!) {
    user(id: $id) {
      id
      email
    }
  }
`;

const UserView: React.FC = () => {
  const response = useLazyLoadQuery<AppQuery>(userQuery, { id: '6060cf5da9c9c12a83bc05a5' });

  return (
    <div>
      <div>
        {response.user?.id}
      </div>
      <div>
        {response.user?.email}
      </div>
    </div>
  );
};

export default UserView;
