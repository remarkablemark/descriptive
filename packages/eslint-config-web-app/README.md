# @descriptive/eslint-config-web-app

[![NPM version](https://img.shields.io/npm/v/@descriptive/eslint-config-web-app.svg)](https://www.npmjs.com/package/@descriptive/eslint-config-web-app)

See [eslint-config-react-app@7.0.0](https://www.npmjs.com/package/eslint-config-react-app/v/7.0.0) ([repository](https://github.com/facebook/create-react-app/tree/v5.0.0/packages/eslint-config-react-app)).

## Install

```sh
npm install @descriptive/eslint-config-web-app
```

## Changes

New files:

```
CHANGELOG.md
```

Removed files:

```
LICENSE
```

Updated files:

```
base.js
index.js
jest.js
package.json
README.md
```

`package.json` diff:

```diff
 "@babel/core": "^7.16.0",
 "@babel/eslint-parser": "^7.16.3",
+"@descriptive/babel-preset-web-app": "1.1.0",
 "@rushstack/eslint-patch": "^1.1.0",
 "@typescript-eslint/eslint-plugin": "^5.5.0",
 "@typescript-eslint/parser": "^5.5.0",
-"babel-preset-react-app": "^10.0.1",
 "confusing-browser-globals": "^1.0.11",
-"eslint-plugin-flowtype": "^8.0.3",
 "eslint-plugin-import": "^2.25.3",
 "eslint-plugin-jest": "^25.3.0",
-"eslint-plugin-jsx-a11y": "^6.5.1",
-"eslint-plugin-react": "^7.27.1",
-"eslint-plugin-react-hooks": "^4.3.0",
 "eslint-plugin-testing-library": "^5.0.1"
```

Removed the dependencies:

```sh
npm rm eslint-plugin-flowtype \
       eslint-plugin-jsx-a11y \
       eslint-plugin-react \
       eslint-plugin-react-hooks
```

## License

[MIT](https://github.com/facebook/create-react-app/blob/v5.0.0/packages/eslint-config-react-app/LICENSE)
