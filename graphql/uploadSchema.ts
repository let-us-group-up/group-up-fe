import axios from 'axios';
import fs from 'fs';
import config from '../config/development.json';

const url = `${config.url}/static`;

const main = async () => {
  const { data } = await axios.get(`${url}/schema.graphql`);
  fs.writeFile('schema.graphql', data, (error) => {
    if (error) throw error;
  });
};

main();
