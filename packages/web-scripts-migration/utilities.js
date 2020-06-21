const { execSync } = require('child_process');
const { resolve } = require('path');
const { writeFileSync } = require('fs');

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

module.exports = {
  cwd: cwd,
  exec: exec,
  log: log,
  write: write,
};
