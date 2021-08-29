import {
  EventViewMarkup,
  Title,
  DateAndTime,
  Description,
  Address,
  Messenger,
  Participants,
  Participant,
} from '@libs/event-view';
import { useIntl } from '@libs/intl';
import { graphql } from 'react-relay';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { NextEventViewQuery } from 'graphql-types/NextEventViewQuery.graphql';

const eventQuery = graphql`
  query NextEventViewQuery($id: ID!) {
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
`;

const NextEventView: React.VFC = () => {
  const intl = useIntl();
  const { event } = useLazyLoadQuery<NextEventViewQuery>(eventQuery, { id: '6073e28bd2f588334b3d7b0d' });

  return (
    <EventViewMarkup
      title={<Title>Title</Title>}
      dataAndTime={<DateAndTime>Date and Time</DateAndTime>}
      description={(
        <Description>
          {intl.formatMessage({
            defaultMessage: `
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            `,
            description: 'event description',
          })}
        </Description>
      )}
      address={<Address />}
      messenger={<Messenger />}
      participants={(
        <Participants>
          {event?.participants.reduce<Array<JSX.Element>>((acc, participant) => {
            if (participant.user) {
              const splitEmail = participant.user.email.split('.');
              acc.push(
                <Participant
                  key={participant.user.id}
                  firstName={splitEmail[0]}
                  lastName={splitEmail[1].slice(0, splitEmail[1].indexOf('@'))}
                />,
              );
            }

            return acc;
          }, [])}
        </Participants>
      )}
    />
  );
};

export default NextEventView;
