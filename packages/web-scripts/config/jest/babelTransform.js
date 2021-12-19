// @remove-on-eject-begin
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

const babelJest = require('babel-jest').default;

/* web-scripts:start
const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    return false;
  }
})();
// web-scripts:end */

module.exports = babelJest.createTransformer({
  presets: [
    [
      /* web-scripts:start
      require.resolve('babel-preset-react-app'),
      {
        runtime: hasJsxRuntime ? 'automatic' : 'classic',
      },
      */
      require.resolve('@descriptive/babel-preset-web-app'),
      // web-scripts:end
    ],
  ],
  babelrc: false,
  configFile: false,
});
