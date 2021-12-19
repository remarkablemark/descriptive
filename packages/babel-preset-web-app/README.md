# @descriptive/babel-preset-web-app

[![NPM version](https://img.shields.io/npm/v/@descriptive/babel-preset-web-app.svg)](https://www.npmjs.com/package/@descriptive/babel-preset-web-app)

See [babel-preset-react-app@10.0.1](https://www.npmjs.com/package/babel-preset-react-app/v/10.0.1) ([repository](https://github.com/facebook/create-react-app/tree/v5.0.0/packages/babel-preset-react-app)).

## Install

```sh
npm install @descriptive/babel-preset-web-app
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
create.js
package.json
README.md
```

`package.json` diff:

```diff
 "@babel/core": "^7.16.0",
 "@babel/plugin-proposal-class-properties": "^7.16.0",
 "@babel/plugin-proposal-decorators": "^7.16.4",
 "@babel/plugin-proposal-nullish-coalescing-operator": "^7.16.0",
 "@babel/plugin-proposal-numeric-separator": "^7.16.0",
 "@babel/plugin-proposal-optional-chaining": "^7.16.0",
 "@babel/plugin-proposal-private-methods": "^7.16.0",
 "@babel/plugin-transform-flow-strip-types": "^7.16.0",
-"@babel/plugin-transform-react-display-name": "^7.16.0",
 "@babel/plugin-transform-runtime": "^7.16.4",
 "@babel/preset-env": "^7.16.4",
-"@babel/preset-react": "^7.16.0",
 "@babel/preset-typescript": "^7.16.0",
 "@babel/runtime": "^7.16.3",
-"babel-plugin-macros": "^3.1.0",
+"babel-plugin-macros": "^3.1.0"
-"babel-plugin-transform-react-remove-prop-types": "^0.4.24"
```

Removed the dependencies:

```sh
npm rm @babel/plugin-transform-react-display-name \
       @babel/preset-react \
       babel-plugin-transform-react-remove-prop-types
```

## License

[MIT](https://github.com/facebook/create-react-app/blob/v5.0.0/packages/babel-preset-react-app/LICENSE)
