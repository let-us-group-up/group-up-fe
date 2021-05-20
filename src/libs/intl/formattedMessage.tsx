import {
  FormattedMessage as ReactIntlFormattedMessage,
} from 'react-intl';
import { FormattedMessage as FormattedMessageComponent } from './IIntl';

const FormattedMessage: FormattedMessageComponent = ({
  defaultMessage,
  description,
  values,
}) => (
  <ReactIntlFormattedMessage
    defaultMessage={defaultMessage}
    description={description}
    values={values}
  />
);

export default FormattedMessage;
