# @descriptive/web-scripts

Inspired by [react-scripts](https://github.com/facebook/create-react-app/tree/v3.4.1/packages/react-scripts).

To migrate ejected [Create React App](https://github.com/facebook/create-react-app) to `@descriptive/web-scripts`:

```sh
npx https://gist.github.com/remarkablemark/f3644d65665dc07a91d7f7202c5a66b6
```

See [gist](https://gist.github.com/remarkablemark/f3644d65665dc07a91d7f7202c5a66b6).

## Installation

[npm](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npm install @descriptive/web-scripts --save-exact
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

## License

[MIT](https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-scripts/LICENSE)
