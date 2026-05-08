// Example ESLint v9 flat config for testing
const amber = require('./index.js');

module.exports = [
  ...amber.configs.recommended,
  {
    files: ['**/*.js'],
    rules: {
      // Add any custom overrides here
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];

