import { graphql } from 'react-relay';
import { usePreloadedQuery, PreloadedQuery } from 'react-relay/hooks';
import { EventsQuery } from 'graphql-types/EventsQuery.graphql';
import { EventsPageQuery } from 'graphql-types/EventsPageQuery.graphql';

import { useIntl } from '@libs/intl';
import { styled } from '@libs/ui-kit/styles';
import Grid from '@libs/ui-kit/components/Grid';
import LibPaper from '@libs/ui-kit/components/Paper';
import Typography from '@libs/ui-kit/components/Typography';


const Paper = styled(LibPaper)(({ theme }) => `
  padding: ${theme.spacing(3, 4)};
`);


const eventsQuery = graphql`
  query EventsQuery {
    events {
      id
      title
      dateAndTime
      address {
        address1
        address2
      }
      participants {
        role
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
  const intl = useIntl();
  const data = usePreloadedQuery<EventsQuery>(
    eventsQuery,
    queryRef,
  );

  return (
    <Grid container spacing={2}>
      {data.events?.map((event) => (
        <Grid key={event.id} item lg={4} md={6} xs={12}>
          <Paper>
            <Typography>{event.title}</Typography>
            {event.dateAndTime && (
              <Typography>
                {intl.formatDate(event.dateAndTime as Date)}
              </Typography>
            )}
            {event.address && (
              <>
                <Typography>
                  {event.address.address1}
                </Typography>
                <Typography>
                  {event.address.address2}
                </Typography>
              </>
            )}
            <Typography>
              {intl.formatMessage({
                defaultMessage: 'Number of participants: {count}',
                description: 'Displays the number of participants',
              }, {
                count: event.participants.length,
              })}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Events;
