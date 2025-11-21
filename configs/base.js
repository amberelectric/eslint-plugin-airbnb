// ESLint v9 Flat Config for eslint-plugin-amber base rules
const globals = require("globals");

module.exports = {
  name: "amber/base",
  languageOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    globals: {
      ...globals.node,
      ...globals.es2021,
    },
  },
  plugins: {
    import: require("eslint-plugin-import"),
  },
  rules: {
    ...require("../rules/best-practices").rules,
    ...require("../rules/errors").rules,
    ...require("../rules/node").rules,
    ...require("../rules/style").rules,
    ...require("../rules/variables").rules,
    ...require("../rules/es6").rules,
    ...require("../rules/imports").rules,
    ...require("../rules/strict").rules,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx"],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },
};
