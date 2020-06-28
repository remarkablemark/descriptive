# web-scripts-migration

Migrates [web-app-template](https://github.com/remarkablemark/web-app-template) to [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx web-scripts-migration
```

Originally a [gist](https://gist.github.com/remarkablemark/f3644d65665dc07a91d7f7202c5a66b6).

## Usage

### Prerequisites

Make sure your working directory is clean before running the script:

```sh
git add .
git stash
```

Once the script finishes, pop the stash:

```sh
git stash pop
```

### web-app-template

Migrate [web-app-template](https://github.com/remarkablemark/web-app-template) to [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx web-scripts-migration
```

### phaser-template

Migrate [phaser-template](https://github.com/remarkablegames/phaser-template) to [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx web-scripts-migration --phaser
```

### Misc

If you have trouble running the app, try reinstalling `node_modules`:

```sh
rm -rf node_modules
npm install # yarn
```

## License

[MIT](https://github.com/remarkablemark/descriptive/blob/master/packages/web-scripts-migration/LICENSE)
