#!/usr/bin/env node

const { resolve } = require('path');

const { cwd, exec, log, write } = require('./utilities');
const { name, version } = require('./package.json');

const isPhaser = process.argv.indexOf('--phaser') !== -1;

process.on('exit', code => {
  log(`Exiting with code: ${code}`);
});

/**
 * Display package info.
 */
log(`${name} v${version}`);

/**
 * Remove files from git.
 */
log('Removing files...');
const files = [
  '.babelrc',
  '.eslintrc',
  'config/env.js',
  'config/modules.js',
  'config/paths.js',
  'config/pnpTs.js',
  'config/webpack.config.js',
  'config/webpackDevServer.config.js',
  'scripts/build.js',
  'scripts/start.js'
];
exec(`git rm --ignore-unmatch ${files.join(' ')}`);

/**
 * Update `package.json`.
 */
log('Updating `package.json`...');
const packageJson = require(resolve(cwd, 'package.json'));
packageJson.scripts.build = 'web-scripts build';
packageJson.scripts.start = 'web-scripts start';
packageJson.scripts.test = 'web-scripts test';
packageJson.scripts['test:ci'] = 'CI=true npm test -- --passWithNoTests';
write('package.json', packageJson);

/**
 * Add `.env`.
 */
if (isPhaser) {
  log('Adding `.env`...');
  write(
    '.env',
    `# Expected environment variables.
IMAGE_INLINE_SIZE_LIMIT=0 # Local data URIs are not supported in Phaser 3.

# Custom environment variables.
WEB_APP_HOMEPAGE=$npm_package_homepage
WEB_APP_PHASER_SCRIPT=//cdn.jsdelivr.net/npm/phaser@$npm_package_devDependencies_phaser/dist/phaser.min.js
WEB_APP_VERSION=$npm_package_version`
  );
  exec('git add .env');
}

/**
 * Update files.
 */
if (isPhaser) {
  exec('git grep -l APP_ | xargs sed -i "" -e "s/APP_/WEB_APP_/g"');
  exec(
    'git grep -l WEB_APP_PHASER_SCRIPT_SRC | xargs sed -i "" -e "s/WEB_APP_PHASER_SCRIPT_SRC/WEB_APP_PHASER_SCRIPT/g"'
  );
  exec('git grep -l WEB_APP_ | xargs git add');
}

/**
 * Add `.eslintrc.json`.
 */
log('Adding `.eslintrc.json`...');
write('.eslintrc.json', {
  extends: '@descriptive/web-app',
  plugins: ['prettier'],
  rules: {
    'no-debugger': 'error',
    'no-console': 'error',
    'prettier/prettier': 'error'
  }
});
exec('git add .eslintrc.json');

/**
 * Remove dependencies.
 */
log('Removing devDependencies...');
const devDependencies = [
  '@babel/core',
  '@babel/preset-env',
  '@svgr/webpack',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'babel-core',
  'babel-eslint',
  'babel-jest',
  'babel-loader',
  'babel-plugin-named-asset-import',
  'bfj',
  'camelcase',
  'case-sensitive-paths-webpack-plugin',
  'css-loader',
  'dotenv',
  'dotenv-expand',
  'eslint',
  'eslint-loader',
  'eslint-plugin-babel',
  'eslint-plugin-flowtype',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'file-loader',
  'fs-extra',
  'html-webpack-plugin',
  'identity-obj-proxy',
  'is-wsl',
  'mini-css-extract-plugin',
  'optimize-css-assets-webpack-plugin',
  'pnp-webpack-plugin',
  'postcss-flexbugs-fixes',
  'postcss-loader',
  'postcss-normalize',
  'postcss-preset-env',
  'postcss-safe-parser',
  'react-dev-utils',
  'resolve',
  'resolve-url-loader',
  'sass-loader',
  'semver',
  'style-loader',
  'terser-webpack-plugin',
  'ts-pnp',
  'url-loader',
  'webpack',
  'webpack-dev-server',
  'webpack-manifest-plugin',
  'workbox-webpack-plugin'
];
if (isPhaser) {
  devDependencies.push('@babel/plugin-proposal-class-properties');
}
exec(`npm remove --save-dev ${devDependencies.join(' ')}`);

/**
 * Install dependencies.
 */
log('Installing devDependencies...');
exec('npm install --save-dev --save-exact @descriptive/web-scripts');
exec('git add package.json');

/**
 * Commit changes.
 */
log('Committing changes...');
exec(
  'git commit -m "refactor: migrate to @descriptive/web-scripts" -m "https://gist.github.com/remarkablemark/f3644d65665dc07a91d7f7202c5a66b6"'
);

log(`Finished ${name}`);
