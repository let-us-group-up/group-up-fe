import { useCallback } from 'react';
import { graphql } from 'react-relay';
import { useMutation } from 'react-relay/hooks';
import { AddNewEventPageMutation } from 'graphql-types/AddNewEventPageMutation.graphql';
import { useIntl } from '@libs/intl';
import { useNavigate } from '@libs/router';
import { useForm, useController, Control } from '@libs/form';
import { styled } from '@libs/ui-kit/styles';
import UiKitPaper from '@libs/ui-kit/components/Paper';
import Grid from '@libs/ui-kit/components/Grid';
import TextField, { TextFieldProps } from '@libs/ui-kit/components/TextField';
import MultilineTextField from '@libs/ui-kit/components/MultilineTextField';
import Button from '@libs/ui-kit/components/Button';
import Typography from '@libs/ui-kit/components/Typography';
import { PageComponent } from '../Page';


enum Fieldset {
  Title = 'title',
  Description = 'description',
}

type FieldsetValues = Record<Fieldset, string>;


interface FormTextFieldProps extends TextFieldProps {
  name: Fieldset;
  control: Control<FieldsetValues>;
}

const FormTextField: React.VFC<FormTextFieldProps> = ({
  name,
  control,
  ...rest
}) => {
  const {
    field: { ref, ...inputProps },
  } = useController<FieldsetValues>({
    name,
    control,
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextField {...rest} {...inputProps} inputRef={ref} />;
};

interface FormMultilineTextFieldProps extends TextFieldProps {
  name: Fieldset;
  control: Control<FieldsetValues>;
}

const FormMultilineTextField: React.VFC<FormMultilineTextFieldProps> = ({
  name,
  control,
  ...rest
}) => {
  const {
    field: { ref, ...inputProps },
  } = useController<FieldsetValues>({
    name,
    control,
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MultilineTextField {...rest} {...inputProps} inputRef={ref} />;
};


const addNewEventQuery = graphql`
  mutation AddNewEventPageMutation($author: ID!, $description: String, $title: String!) {
    createEvent(author: $author, description: $description, title: $title) {
      id
      title
      dateAndTime
      address {
        address1
        address2
      }
      participants {
        user {
          id
        }
      }
    }
  }
`;

const Form = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
  } = useForm<FieldsetValues>({
    defaultValues: {
      [Fieldset.Title]: '',
      [Fieldset.Description]: '',
    },
  });
  const [addNewEvent] = useMutation<AddNewEventPageMutation>(addNewEventQuery);

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onSubmit = handleSubmit((data) => {
    addNewEvent({
      variables: {
        title: data.title,
        description: data.description,
        author: '6060cf5da9c9c12a83bc05a5',
      },
    });
  });

  return (
    <Grid
      container
      spacing={4}
      component="form"
      onSubmit={onSubmit}
    >
      <Grid item xs={12}>
        <Typography variant="h2">
          {intl.formatMessage({
            defaultMessage: 'Add new event form',
            description: 'Add new event form title',
          })}
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={12}>
          <FormTextField
            control={control}
            id="title"
            name={Fieldset.Title}
            label={intl.formatMessage({
              defaultMessage: 'Title',
              description: 'Title field label',
            })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormMultilineTextField
            control={control}
            id="description"
            name={Fieldset.Description}
            label={intl.formatMessage({
              defaultMessage: 'Description',
              description: 'Description field label',
            })}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={2} justifyContent="center">
        <Grid item xs={3}>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={handleCancel}
          >
            {intl.formatMessage({
              defaultMessage: 'Cancel',
              description: 'Cancel button label',
            })}
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
          >
            {intl.formatMessage({
              defaultMessage: 'Save',
              description: 'Save button label',
            })}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};


const Paper = styled(UiKitPaper)(({ theme }) => `
  padding: ${theme.spacing(4, 3)};
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
`);

const AddNewEventPage: PageComponent = () => (
  <Paper component="main">
    <Form />
  </Paper>
);

export default AddNewEventPage;
