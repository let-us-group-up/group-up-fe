import { graphql } from 'react-relay';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { UserViewQuery } from 'graphql-types/UserViewQuery.graphql';

const userQuery = graphql`
  query UserViewQuery($id: ID!) {
    user(id: $id) {
      id
      email
    }
  }
`;

const UserView: React.VFC = () => {
  const response = useLazyLoadQuery<UserViewQuery>(userQuery, { id: '6060cf5da9c9c12a83bc05a5' });

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
