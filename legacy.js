// Legacy config - deprecated in favor of flat config
// For backwards compatibility with ESLint < 9

module.exports = {
  extends: [
    './configs/base.js',
  ].map(require.resolve),
  rules: {},
};
