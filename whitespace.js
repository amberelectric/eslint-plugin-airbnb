/* eslint global-require: 0 */

// Note: This file is kept for backwards compatibility but the approach
// has changed for ESLint v9. In flat config, you should selectively
// override rules directly in your config.

const whitespaceRules = require('./whitespaceRules');

const baseConfig = require('./configs/base');

const severities = ['off', 'warn', 'error'];
const { isArray } = Array;
const { entries } = Object;

function getSeverity(ruleConfig) {
  if (isArray(ruleConfig)) {
    return getSeverity(ruleConfig[0]);
  }
  if (typeof ruleConfig === 'number') {
    return severities[ruleConfig];
  }
  return ruleConfig;
}

function onlyErrorOnRules(rulesToError, config) {
  const errorsOnly = { ...config };
  const baseRules = config.rules || {};

  entries(baseRules).forEach((rule) => {
    const ruleName = rule[0];
    const ruleConfig = rule[1];
    const severity = getSeverity(ruleConfig);

    if (rulesToError.indexOf(ruleName) === -1 && severity === 'error') {
      if (isArray(ruleConfig)) {
        errorsOnly.rules[ruleName] = ['warn'].concat(ruleConfig.slice(1));
      } else if (typeof ruleConfig === 'number') {
        errorsOnly.rules[ruleName] = 1;
      } else {
        errorsOnly.rules[ruleName] = 'warn';
      }
    }
  });

  return errorsOnly;
}

module.exports = onlyErrorOnRules(whitespaceRules, baseConfig);
