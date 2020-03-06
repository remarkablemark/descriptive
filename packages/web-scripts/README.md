# @descriptive/web-scripts

Inspired by [react-scripts](https://github.com/facebook/create-react-app/tree/v3.4.0/packages/react-scripts).

## Changes

Removed the files and folders:

```
.npmignore
LICENSE
fixtures/
lib/
template-typescript/
```

Updated the files:

```
README.md
bin/{react-scripts.js => web-scripts.js}
config/env.js
config/webpack.config.js
package.json
scripts/eject.js
```

`package.json` dependencies diff:

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

[MIT](https://github.com/facebook/create-react-app/blob/v3.4.0/packages/react-scripts/LICENSE)
