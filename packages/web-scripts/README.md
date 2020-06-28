# @descriptive/web-scripts

Inspired by [react-scripts](https://github.com/facebook/create-react-app/tree/v3.4.1/packages/react-scripts) from [Create React App](https://github.com/facebook/create-react-app).

## Installation

[npm](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npm install @descriptive/web-scripts --save --save-exact
```

[Yarn](https://yarnpkg.com/package/@descriptive/web-scripts):

```sh
yarn add @descriptive/web-scripts --exact
```

## Changes

### Files

Removed files and folders:

- .npmignore
- LICENSE
- fixtures/
- lib/
- template-typescript/

```sh
rm -rf .npmignore LICENSE fixtures lib template-typescript
```

Updated files:

- README.md
- config/env.js
- config/webpack.config.js
- package.json
- scripts/utils/createJestConfig.js

### package.json

Removed dependencies:

```sh
npm rm -S babel-preset-react-app eslint-config-react-app eslint-plugin-react eslint-plugin-react-hooks react-app-polyfill
```

Removed devDependencies:

```sh
npm rm -D react react-dom
```

Installed dependencies:

```sh
npm i -S @babel/preset-env @descriptive/eslint-config-web-app
```

See diff:

```diff
+@babel/plugin-proposal-class-properties
+@babel/preset-env
+@descriptive/eslint-config-web-app
-babel-preset-react-app
-eslint-config-react-app
-eslint-plugin-react
-eslint-plugin-react-hooks
-react-app-polyfill
-react
-react-dom
```

## Migration

To migrate [web-app-template](https://github.com/remarkablemark/web-app-template) to [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx web-scripts-migration
```

See [web-scripts-migration](https://github.com/remarkablemark/descriptive/tree/master/packages/web-scripts-migration).

## License

[MIT](https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-scripts/LICENSE)
