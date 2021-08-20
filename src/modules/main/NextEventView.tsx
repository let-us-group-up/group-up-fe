import Grid from '@libs/ui-kit/components/Grid';
import Typography from '@libs/ui-kit/components/Typography';
import List from '@libs/ui-kit/components/List';
import ListItem from '@libs/ui-kit/components/ListItem';
import ListItemAvatar from '@libs/ui-kit/components/ListItemAvatar';
import ListItemText from '@libs/ui-kit/components/ListItemText';
import Avatar from '@libs/ui-kit/components/Avatar';
import Divider from '@libs/ui-kit/components/Divider';

const NextEventView: React.VFC = () => (
  <Grid container spacing={2}>
    <Grid item xs={10}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h2">Title</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" textAlign="right">Date and Time</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" textAlign="justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Address1</Typography>
          <Typography variant="h6">Address2</Typography>
        </Grid>
        <Grid item xs={12}>Messenger</Grid>
      </Grid>
    </Grid>
    <Grid item xs={2}>
      <Grid container spacing={2}>
        <Grid item>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>TH</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
              />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>TH</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
              />
            </ListItem>
            <Divider variant="inset" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>TH</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default NextEventView;
