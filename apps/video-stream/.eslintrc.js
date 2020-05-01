const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  globals: {
    electron: true,
  },
  rules: {
    'no-restricted-imports': OFF,
  }
};