import { LANGUAGE } from '../constants';

export interface IProvider {
  uploadDefaultLanguageTranslations: () => Promise<void>;
  exportTranslations: (language: LANGUAGE) => Promise<void>;
}
