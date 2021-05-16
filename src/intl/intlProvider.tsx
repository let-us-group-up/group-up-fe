import {
  IntlProvider as ReactIntlIntlProvider,
  MessageFormatElement,
} from 'react-intl';
import { IntlProvider } from './IIntl';

export type IntlProviderMessages = Record<string, Array<MessageFormatElement>>;

const IntlProvider: IntlProvider<IntlProviderMessages> = ({
  messages,
  locale,
  defaultLocale,
  children,
}) => (
  <ReactIntlIntlProvider
    messages={messages}
    locale={locale}
    defaultLocale={defaultLocale}
  >
    {children}
  </ReactIntlIntlProvider>
);

export default IntlProvider;
