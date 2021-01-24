# @descriptive/eslint-config-web-app

[![NPM version](https://img.shields.io/npm/v/@descriptive/eslint-config-web-app.svg)](https://www.npmjs.com/package/@descriptive/eslint-config-web-app)

See [eslint-config-react-app@6.0.0](https://www.npmjs.com/package/eslint-config-react-app/v/6.0.0) ([repository](https://github.com/facebook/create-react-app/tree/v4.0.1/packages/eslint-config-react-app)).

## Install

```sh
npm install @descriptive/eslint-config-web-app
```

## Changes

New files:

```
CHANGELOG.md
package-lock.json
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
 {
   "peerDependencies": {
-    "eslint-plugin-flowtype": "^5.2.0",
-    "eslint-plugin-jsx-a11y": "^6.3.1",
-    "eslint-plugin-react": "^7.20.3",
-    "eslint-plugin-react-hooks": "^4.0.8",
   }
}
```

Remove the dependencies:

```sh
npm rm eslint-plugin-flowtype \
       eslint-plugin-jsx-a11y \
       eslint-plugin-react \
       eslint-plugin-react-hooks
```

## License

[MIT](https://github.com/facebook/create-react-app/blob/v4.0.1/packages/eslint-config-react-app/LICENSE)
