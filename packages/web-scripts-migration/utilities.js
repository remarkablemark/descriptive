const { execSync } = require('child_process');
const { resolve } = require('path');
const { writeFileSync } = require('fs');

const cwd = process.cwd();

/**
 * Runs command.
 *
 * @param {String} command
 * @return {String}
 */
const exec = command => execSync(command, { cwd, stdio: 'inherit' });

/**
 * Logs to console.
 *
 * @param {...*} args
 */
const log = (...args) => console.log('INFO:', ...args);

/**
 * Writes to file.
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
  write: write
};
