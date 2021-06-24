const path = require('path');

module.exports = {
  crosscutting: path.resolve(__dirname, 'src', 'crosscutting', 'index.ts'),
  account: path.resolve(__dirname, 'src', 'account', 'index.ts'),
};
