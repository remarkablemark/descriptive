# @descriptive/web-scripts

[![NPM version](https://img.shields.io/npm/v/@descriptive/web-scripts.svg)](https://www.npmjs.com/package/@descriptive/web-scripts)

See [react-scripts](https://www.npmjs.com/package/react-scripts/v/5.0.0) ([repository](https://github.com/facebook/create-react-app/tree/v5.0.0/packages/react-scripts)).

## Install

```sh
npm install @descriptive/web-scripts
```

## Changes

New files:

```
CHANGELOG.md
```

Removed files and folders:

```
fixtures/
template/
template-typescript/
.npmignore
LICENSE
```

Remove the files and folders:

```sh
rm -rf fixtures/ \
       template/ \
       template-typescript/ \
       .npmignore \
       LICENSE
```

Updated files:

```
config/jest/babelTransform.js
config/jest/fileTransform.js
config/env.js
config/paths.js
config/webpack.config.js
scripts/utils/createJestConfig.js
scripts/utils/verifyTypeScriptSetup.js
scripts/eject.js
scripts/init.js
scripts/start.js
package.json
README.md
```

`package.json` diff:

```diff
 "dependencies": {
   "@babel/core": "^7.16.0",
+  "@descriptive/babel-preset-web-app": "1.1.0",
+  "@descriptive/eslint-config-web-app": "2.1.0",
-  "@pmmmwh/react-refresh-webpack-plugin": "^0.5.3",
   "@svgr/webpack": "^5.5.0",
   "babel-jest": "^27.4.2",
   "babel-loader": "^8.2.3",
   "babel-plugin-named-asset-import": "^0.3.8",
-  "babel-preset-react-app": "^10.0.1",
   "bfj": "^7.0.2",
   "browserslist": "^4.18.1",
   "camelcase": "^6.2.1",
   "case-sensitive-paths-webpack-plugin": "^2.4.0",
   "css-loader": "^6.5.1",
   "css-minimizer-webpack-plugin": "^3.2.0",
   "dotenv": "^10.0.0",
   "dotenv-expand": "^5.1.0",
   "eslint": "^8.3.0",
-  "eslint-config-react-app": "^7.0.0",
   "eslint-webpack-plugin": "^3.1.1",
   "file-loader": "^6.2.0",
   "fs-extra": "^10.0.0",
   "html-webpack-plugin": "^5.5.0",
   "identity-obj-proxy": "^3.0.0",
   "jest": "^27.4.3",
   "jest-resolve": "^27.4.2",
   "jest-watch-typeahead": "^1.0.0",
   "mini-css-extract-plugin": "^2.4.5",
   "postcss": "^8.4.4",
   "postcss-flexbugs-fixes": "^5.0.2",
   "postcss-loader": "^6.2.1",
   "postcss-normalize": "^10.0.1",
   "postcss-preset-env": "^7.0.1",
   "prompts": "^2.4.2",
-  "react-app-polyfill": "^3.0.0",
   "react-dev-utils": "^12.0.0",
-  "react-refresh": "^0.11.0",
   "resolve": "^1.20.0",
   "resolve-url-loader": "^4.0.0",
   "sass-loader": "^12.3.0",
   "semver": "^7.3.5",
   "source-map-loader": "^3.0.0",
   "style-loader": "^3.3.1",
   "tailwindcss": "^3.0.2",
   "terser-webpack-plugin": "^5.2.5",
   "webpack": "^5.64.4",
   "webpack-dev-server": "^4.6.0",
   "webpack-manifest-plugin": "^4.0.2",
   "workbox-webpack-plugin": "^6.4.1"
 },
-"devDependencies": {
-  "react": "^17.0.2",
-  "react-dom": "^17.0.2"
-},
 "optionalDependencies": {
   "fsevents": "^2.3.2"
 },
 "peerDependencies": {
-  "react": ">= 16",
   "typescript": "^3.2.1 || ^4"
 },
```

Remove the dependencies:

```sh
npm rm -S @pmmmwh/react-refresh-webpack-plugin \
          babel-preset-react-app \
          eslint-config-react-app \
          react-app-polyfill \
          react-refresh
```

Remove the devDependencies:

```sh
npm rm -D react \
          react-dom
```

Save the dependencies:

```sh
npm i -S @descriptive/babel-preset-web-app \
         @descriptive/eslint-config-web-app
```

## Migration

To migrate [web-app-template](https://github.com/remarkablemark/web-app-template) to [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx web-scripts-migration
```

See [web-scripts-migration](https://github.com/remarkablemark/descriptive/tree/master/packages/web-scripts-migration).

## License

[MIT](https://github.com/facebook/create-react-app/blob/v5.0.0/packages/react-scripts/LICENSE)
