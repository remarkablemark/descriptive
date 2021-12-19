/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

// This file contains the minimum ESLint configuration required for Create
// React App support, and is used as the `baseConfig` for `eslint-loader`
// to ensure that user-provided configs don't need this boilerplate.

module.exports = {
  root: true,

  parser: '@babel/eslint-parser',

  /* eslint-config-web-app:begin
  plugins: ['react'],
  // eslint-config-web-app:end */

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      /* eslint-config-web-app:begin
      presets: [require.resolve('babel-preset-react-app/prod')],
      */
      presets: [require.resolve('@descriptive/babel-preset-web-app/prod')],
      // eslint-config-web-app:end */
    },
  },

  /* eslint-config-web-app:begin
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
  },
  // eslint-config-web-app:end */
};
