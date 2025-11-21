// ESLint v9 Flat Config for eslint-plugin-airbnb with React
const reactRules = require("../rules/react");
const reactA11yRules = require("../rules/react-a11y");

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  name: "amber/react",
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react: require("eslint-plugin-react"),
    "jsx-a11y": require("eslint-plugin-jsx-a11y"),
  },
  rules: {
    ...reactRules.rules,
    ...reactA11yRules.rules,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"],
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
    propWrapperFunctions: [
      "forbidExtraProps", // https://www.npmjs.com/package/airbnb-prop-types
      "exact", // https://www.npmjs.com/package/prop-types-exact
      "Object.freeze", // https://tc39.github.io/ecma262/#sec-object.freeze
    ],
  },
};
