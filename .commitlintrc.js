const { readdirSync } = require('fs');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['all', require('./package').name, ...readdirSync('./packages')],
    ],
    'scope-empty': [2, 'never'],
  },
};
