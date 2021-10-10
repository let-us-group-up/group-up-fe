import { Suspense, useEffect } from 'react';
import { graphql } from 'react-relay';
import { useQueryLoader } from 'react-relay/hooks';
import { EventsPageQuery } from 'graphql-types/EventsPageQuery.graphql';
import { PageComponent } from '../Page';
import Events from './Events';

const eventsPageQuery = graphql`
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
`;

const EventsPage: PageComponent = () => {
  const [queryReference, loadQuery] = useQueryLoader<EventsPageQuery>(
    eventsPageQuery,
  );

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  return (
    <main>
      <Suspense fallback="Loading...">
        {queryReference != null ? <Events queryRef={queryReference} /> : 'Loading...'}
      </Suspense>
    </main>
  );
};

export default EventsPage;
