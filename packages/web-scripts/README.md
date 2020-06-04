# @descriptive/web-scripts

Inspired by [react-scripts](https://github.com/facebook/create-react-app/tree/v3.4.1/packages/react-scripts).

## Installation

```sh
$ npm install @descriptive/web-scripts
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

### package.json

Remove dependencies:

```sh
npm rm -S babel-preset-react-app eslint-config-react-app eslint-plugin-react eslint-plugin-react-hooks react-app-polyfill
```

Install dependencies:

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
```

## License

[MIT](https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-scripts/LICENSE)
