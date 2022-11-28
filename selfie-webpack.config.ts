import { EnvironmentPlugin } from 'webpack';
import { config } from 'dotenv';
import { resolve } from 'path';


config();

module.exports = {
  plugins: [
    new EnvironmentPlugin([  'BASE_URL_ADM_DOMAIN',
    'BASE_URL_ESTUDANTE_DOMAIN'])
  ]
}