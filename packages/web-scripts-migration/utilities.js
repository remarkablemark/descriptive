const { execSync, spawnSync } = require('child_process');
const { resolve } = require('path');
const { writeFileSync } = require('fs');

const jscodeshiftBinary = require.resolve('.bin/jscodeshift');

const cwd = process.cwd();

/**
 * Runs command with `exec`.
 *
 * @see {@link https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options}
 *
 * @param {String} command
 * @return {String}
 */
const exec = command =>
  execSync(command, {
    cwd,
    stdio: 'inherit',
  });

/**
 * Prints to `stdout` with newline.
 *
 * @see {@link https://nodejs.org/api/console.html#console_console_log_data_args}
 *
 * @param {...*} args
 */
const log = (...args) => console.log('INFO:', ...args);

/**
 * Runs command with `spawn`.
 *
 * @see {@link https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options}
 *
 * @param {String} command
 * @param {String[]} [args]
 * @return {String}
 */
const spawn = (command, args) =>
  spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
  });

/**
 * Writes to file.
 *
 * @see {@link https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options}
 *
 * @param {String} file
 * @param {*} data
 */
const write = (file, data) =>
  writeFileSync(
    resolve(cwd, file),
    (typeof data === 'string' ? data : JSON.stringify(data, null, 2)) + '\n'
  );

/**
 * Runs codemod given transform module and path.
 *
 * @see {@link https://github.com/facebook/jscodeshift}
 *
 * @param {String} transform
 * @param {String} path
 * @return {String}
 */
const jscodeshift = (transform, path) =>
  spawn(jscodeshiftBinary, [
    '--transform',
    transform,
    '--ignore-pattern',
    'node_modules',
    path,
  ]);

module.exports = {
  cwd,
  exec,
  jscodeshift,
  log,
  spawn,
  write,
};
