Before running the script, make sure your working directory is clean:

```sh
git add .
git stash
```

Migrate [web-app-template](https://github.com/remarkablemark/web-app-template) (ejected [CRA](https://github.com/facebook/create-react-app)) to [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx https://gist.github.com/remarkablemark/f3644d65665dc07a91d7f7202c5a66b6
```

Migrate [phaser-template](https://github.com/remarkablegames/phaser-template) to [@descriptive/web-scripts](https://www.npmjs.com/package/@descriptive/web-scripts):

```sh
npx https://gist.github.com/remarkablemark/f3644d65665dc07a91d7f7202c5a66b6 --phaser
```

Once the script finishes, pop your stash:

```sh
git stash pop
```

If you have trouble running the app, try reinstalling `node_modules`:

```sh
rm -rf node_modules && npm i
```
