/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const defaultLangMessages = require('./lang.json');


const token = process.env.TRANSLATIONS_PROVIDER_TOKEN;
const projectId = process.env.TRANSLATIONS_PROVIDER_PROJECT_ID;
const url = 'https://api.poeditor.com/v2';
const LANGUAGE = {
  EN: 'en',
  RU: 'ru',
};

const defaultLanguage = LANGUAGE.EN;

const translationsFolder = 'translations';


const exportTranslations = async (language) => {
  const { data } = await axios.default.post(`${url}/projects/export`, `api_token=${token}&id=${projectId}&language=${language}&type=key_value_json`);
  const { data: file } = await axios.default.get(data.result.url);
  fs.writeFile(path.join(__dirname, translationsFolder, `${language}.json`), JSON.stringify(file), (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  });
};


const uploadDefaultLanguageTranslations = async () => {
  const formData = new FormData();
  formData.append('api_token', token);
  formData.append('id', projectId);
  formData.append('updating', 'terms_translations');
  formData.append('language', defaultLanguage);
  formData.append('overwrite', 1);
  formData.append('sync_terms', 1);
  formData.append('file', JSON.stringify(defaultLangMessages), 'lang.json');
  const { data } = await axios.default.post(`${url}/projects/upload`, formData, {
    headers: formData.getHeaders(),
  });
  return data;
};


const main = async () => {
  await uploadDefaultLanguageTranslations();
  await exportTranslations(LANGUAGE.RU);
};


main();
