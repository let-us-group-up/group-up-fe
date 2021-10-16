import { Suspense, useEffect } from 'react';
import { graphql } from 'react-relay';
import { useQueryLoader } from 'react-relay/hooks';
import { EventsPageQuery } from 'graphql-types/EventsPageQuery.graphql';
import Grid from '@libs/ui-kit/components/Grid';
import { PageComponent } from '../Page';
import Events from './Events';
import User from './User';

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
    user(id: "6060cf5da9c9c12a83bc05a5") {
      id
      email
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
    <Grid container spacing={4} component="main">
      <Grid item md={9} xs={12}>
        <Suspense fallback="Loading...">
          {queryReference != null ? <Events queryRef={queryReference} /> : 'Loading...'}
        </Suspense>
      </Grid>
      <Grid item md={3} xs={12}>
        <Suspense fallback="Loading...">
          {queryReference != null ? <User queryRef={queryReference} /> : 'Loading...'}
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default EventsPage;
