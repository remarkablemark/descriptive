# @descriptive

[![Build Status](https://github.com/remarkablemark/descriptive/workflows/build/badge.svg?branch=master)](https://github.com/remarkablemark/descriptive/actions?query=workflow%3Abuild)

[Monorepo](https://github.com/lerna/lerna) of [packages](packages):

- [eslint-config-web-app](packages/eslint-config-web-app)
- [web-scripts-migration](packages/web-scripts-migration)
- [web-scripts](packages/web-scripts)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablemark/descriptive.git && cd descriptive
```

Install and bootstrap:

```sh
yarn
```

## Develop

Let's say you made changes to `web-scripts`.

To test those changes, create a global [symlink](https://docs.npmjs.com/cli/link.html):

```sh
cd descriptive/packages/web-scripts/
npm link
```

Symlink the package in the project that's using it:

```sh
cd path/to/project/
npm link @descriptive/web-scripts
```

If that doesn't work, remove `node_modules`, link, and install:

```sh
rm -rf node_modules
npm link @descriptive/web-scripts
npm install
```

If it's not working, try reinstalling `node_modules` before linking:

```sh
cd path/to/project
rm -rf node_modules
npm install
npm link @descriptive/web-scripts
```

Once you're done testing the package, remove the symlink:

```sh
cd path/to/project/
npm unlink @descriptive/web-scripts
```

```sh
cd descriptive/packages/web-scripts/
npm unlink -g
```

If you made changes to both `web-scripts` and `eslint-config-web-app`, make sure to link both packages:

```sh
cd descriptive/packages/eslint-config-web-app/
npm link
cd ../web-scripts/
npm link @descriptive/eslint-config-web-app
npm link
```

## Release

Release and publish are automated by [Lerna](https://github.com/lerna/lerna).
