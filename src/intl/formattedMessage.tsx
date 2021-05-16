import {
  FormattedMessage as ReactIntlFormattedMessage,
} from 'react-intl';
import { FormattedMessage } from './IIntl';

const FormattedMessage: FormattedMessage = ({
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
