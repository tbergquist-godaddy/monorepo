/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');

module.exports = {
  locales: i18n.locales,
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: 'src/**/*.{ts,tsx}',
};
