import { IProvider } from './IProvider';
import PoeditProvider, {
  poeditProviderName,
} from './translationsProviders/poeditProvider';

const TranslationsProviderFactory = (translationsProvider: string): IProvider => {
  switch (translationsProvider) {
    case poeditProviderName:
      return PoeditProvider;
    default:
      throw new Error('No provider');
  }
};

export default TranslationsProviderFactory;
