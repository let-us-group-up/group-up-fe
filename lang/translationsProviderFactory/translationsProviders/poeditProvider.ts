import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import FormData from 'form-data';
import { defaultLanguage } from '../../constants';
import { translationsFolder, rootFolder } from './constants';
import { IProvider } from '../IProvider';
import defaultLangMessages from '../../lang.json';

dotenv.config();


const token = process.env.POEDIT_TRANSLATIONS_PROVIDER_TOKEN;
const projectId = process.env.POEDIT_TRANSLATIONS_PROVIDER_PROJECT_ID;

const url = 'https://api.poeditor.com/v2';


const uploadDefaultLanguageTranslations: IProvider['uploadDefaultLanguageTranslations'] = async () => {
  if (!token) throw new Error('Token is not specified');
  if (!projectId) throw new Error('Project ID is not specified');

  const formData = new FormData();
  formData.append('api_token', token);
  formData.append('id', projectId);
  formData.append('updating', 'terms_translations');
  formData.append('language', defaultLanguage);
  formData.append('overwrite', 1);
  formData.append('sync_terms', 1);
  formData.append('file', JSON.stringify(defaultLangMessages), 'lang.json');
  await axios.post(`${url}/projects/upload`, formData, {
    headers: formData.getHeaders(),
  });
};


const exportTranslations: IProvider['exportTranslations'] = async (language) => {
  const { data } = await axios.post(`${url}/projects/export`, `api_token=${token}&id=${projectId}&language=${language}&type=key_value_json`);
  const { data: file } = await axios.get(data.result.url);
  fs.writeFile(path.resolve(rootFolder, translationsFolder, `${language}.json`), JSON.stringify(file), (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  });
};


export const poeditProviderName = 'poedit';

const PoeditProvider: IProvider = {
  uploadDefaultLanguageTranslations,
  exportTranslations,
};

export default PoeditProvider;
