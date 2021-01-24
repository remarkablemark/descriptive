# @descriptive/web-scripts

[![NPM version](https://img.shields.io/npm/v/@descriptive/web-scripts.svg)](https://www.npmjs.com/package/@descriptive/web-scripts)

See [react-scripts](https://www.npmjs.com/package/react-scripts/v/4.0.1) ([repository](https://github.com/facebook/create-react-app/tree/v4.0.1/packages/react-scripts)).

## Install

```sh
npm install @descriptive/web-scripts
```

## Changes

New files:

```
CHANGELOG.md
package-lock.json
```

Removed files and folders:

```
fixtures/
template-typescript/
template/
.npmignore
LICENSE
```

Remove the files and folders:

```sh
rm -rf fixtures/ \
       template-typescript/ \
       template/ \
       .npmignore \
       LICENSE
```

Updated files:

```
config/env.js
config/jest/babelTransform.js
config/webpack.config.js
scripts/start.js
package.json
README.md
```

`package.json` diff:

```diff
 {
   "dependencies": {
-    "babel-preset-react-app": "^10.0.0",
-    "eslint-config-react-app": "^6.0.0",
-    "eslint-plugin-react": "^7.21.5",
-    "eslint-plugin-react-hooks": "^4.2.0",
-    "react-app-polyfill": "^2.0.0",
+    "@babel/plugin-proposal-class-properties": "^7.12.1",
+    "@babel/preset-env": "^7.12.11",
+    "@descriptive/eslint-config-web-app": "1.0.1",
   },
-  "devDependencies": {
-    "react": "^17.0.1",
-    "react-dom": "^17.0.1"
-  },
   "peerDependencies": {
-    "react": ">= 16",
   },
 }
```

Remove the dependencies:

```sh
npm rm -S babel-preset-react-app \
          eslint-config-react-app \
          eslint-plugin-react \
          eslint-plugin-react-hooks \
          react-app-polyfill
```

Remove the devDependencies:

```sh
npm rm -D react \
          react-dom
```

Save the dependencies:

```sh
npm i -S @babel/preset-env \
         @descriptive/eslint-config-web-app
```

## Migration

To migrate [web-app-template](https://github.com/remarkablemark/web-app-template) to [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx web-scripts-migration
```

See [web-scripts-migration](https://github.com/remarkablemark/descriptive/tree/master/packages/web-scripts-migration).

## License

[MIT](https://github.com/facebook/create-react-app/blob/v4.0.1/packages/react-scripts/LICENSE)
