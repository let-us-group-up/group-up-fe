import { Language } from '../constants';

export interface IProvider {
  uploadDefaultLanguageTranslations: () => Promise<void>;
  exportTranslations: (language: Language) => Promise<void>;
}
