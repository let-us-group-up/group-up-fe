import {
  IntlProvider as ReactIntlIntlProvider,
  MessageFormatElement,
} from 'react-intl';
import { IntlProvider as IntlProviderComponent } from './IIntl';

export type IntlProviderMessages = Record<string, Array<MessageFormatElement>>;

const IntlProvider: IntlProviderComponent<IntlProviderMessages> = ({
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
