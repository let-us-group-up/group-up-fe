import { graphql } from 'react-relay';
import { usePreloadedQuery, PreloadedQuery } from 'react-relay/hooks';
import { UserQuery } from 'graphql-types/UserQuery.graphql';
import { EventsPageQuery } from 'graphql-types/EventsPageQuery.graphql';
import { useIntl } from '@libs/intl';
import { styled } from '@libs/ui-kit/styles';
import Grid from '@libs/ui-kit/components/Grid';
import LibPaper from '@libs/ui-kit/components/Paper';
import Typography from '@libs/ui-kit/components/Typography';


const Paper = styled(LibPaper)(({ theme }) => `
  padding: ${theme.spacing(3, 4)};
`);


const userQuery = graphql`
  query UserQuery {
    user(id: "6060cf5da9c9c12a83bc05a5") {
      id
      email
    }
  }
`;

interface UserProps {
  queryRef: PreloadedQuery<EventsPageQuery>;
}

const User: React.VFC<UserProps> = ({
  queryRef,
}) => {
  const intl = useIntl();
  const data = usePreloadedQuery<UserQuery>(
    userQuery,
    queryRef,
  );

  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h4">
            {intl.formatMessage({
              defaultMessage: 'Me',
              description: 'Info about me',
            })}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            {data.user?.id}
          </Typography>
          <Typography>
            {data.user?.email}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default User;
