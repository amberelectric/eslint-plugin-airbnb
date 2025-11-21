// ESLint v9 Flat Config for React Hooks

const reactHooksRules = require('../rules/react-hooks');

module.exports = {
  name: 'amber/react-hooks',
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    'react-hooks': require('eslint-plugin-react-hooks'),
  },
  rules: {
    ...reactHooksRules.rules,
  },
};

