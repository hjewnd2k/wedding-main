/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildFormatCommand = 'prettier --write';

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildFormatCommand],
};
