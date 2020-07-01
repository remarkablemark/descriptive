# @descriptive

[![Build Status](https://travis-ci.org/remarkablemark/descriptive.svg?branch=master)](https://travis-ci.org/remarkablemark/descriptive)

[Monorepo](https://github.com/lerna/lerna) of [packages](packages):

- [eslint-config-web-app](packages/eslint-config-web-app)
- [web-scripts-migration](packages/web-scripts-migration)
- [web-scripts](packages/web-scripts)

## Installation

Clone repository:

```sh
$ git clone https://github.com/remarkablemark/descriptive.git && cd $_
```

Install root dependencies:

```sh
$ npm install
```

Install and link dependencies:

```sh
$ npm run bootstrap
```

## Developing

Let's say you made changes to the `web-scripts` package.

To test those changes, create a global [symlink](https://docs.npmjs.com/cli/link.html) for that package:

```sh
$ cd packages/web-scripts/
$ npm link
```

Then symlink the package in a project that's using it:

```sh
$ cd ~/projects/test/
$ npm link @descriptive/web-scripts
# rm -rf node_modules && npm link @descriptive/web-scripts && npm install
```

Once you're done testing the package, remove the symlinks:

```sh
$ cd ~/projects/test/
$ npm unlink @descriptive/web-scripts
```

```sh
$ cd descriptive/packages/web-scripts/
$ npm unlink
```

## Release

List updated packages:

```sh
$ npm run updated
```

Preview release (make sure to clean up the changes afterwards):

```sh
$ npm run release:dry-run
```

Publish any updated packages (only collaborators with credentials can do this):

```sh
$ npm run release
```
