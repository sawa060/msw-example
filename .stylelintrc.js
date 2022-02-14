module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'no-empty-first-line': null,
    'value-no-vendor-prefix': true,
    'font-weight-notation': 'numeric',
    'value-keyword-case': null,
    'alpha-value-notation': 'number',
    'selector-class-pattern': null,
  },
};
