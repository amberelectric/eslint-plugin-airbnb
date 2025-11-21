// eslint-plugin-amber main entry point
// ESLint v9 Flat Config
const base = require("./configs/base");
const react = require("./configs/react");
const reactHooks = require("./configs/react-hooks");

/** @type {import('eslint').ESLint.Plugin} */
const plugin = {
  meta: {
    name: "eslint-plugin-amber",
    version: "1.0.0",
  },
  configs: {
    // Recommended base config (JavaScript/ES6)
    base,
    // React config (includes base)
    react: [base, react],
    // React with hooks
    "react-hooks": [base, react, reactHooks],
    // Full recommended config (alias for react-hooks)
    recommended: [base, react, reactHooks],
  },
};

module.exports = plugin;
