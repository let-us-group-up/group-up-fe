import { graphql } from 'react-relay';
import { usePreloadedQuery, PreloadedQuery } from 'react-relay/hooks';
import { EventsQuery } from 'graphql-types/EventsQuery.graphql';
import { EventsPageQuery } from 'graphql-types/EventsPageQuery.graphql';

const eventsQuery = graphql`
  query EventsQuery {
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
`;

interface EventsProps {
  queryRef: PreloadedQuery<EventsPageQuery>;
}

const Events: React.VFC<EventsProps> = ({
  queryRef,
}) => {
  const data = usePreloadedQuery<EventsQuery>(
    eventsQuery,
    queryRef,
  );

  return (
    <div>
      Events
      {data.events?.[0]?.id}
    </div>
  );
};

export default Events;
