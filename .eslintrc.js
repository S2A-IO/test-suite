/**
 * @author Copyright RIKSOF (Private) Limited.
 *
 * @file Configures eslint for typescript.
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/camelcase': [
      'error',
      {
        allow: [ '^_', '__non_webpack_require__' ]
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-var-requires': 0,
    complexity: [ 'error', 10 ],
    'max-depth': [ 'error', 4 ],
    'max-statements': [ 'error', 50 ],
    'no-console': [
      'warn',
      {
        allow: [ 'warn' ]
      }
    ],
    'no-inner-declarations': 0,
    'no-prototype-builtins': 0,
    'only-arrow-functions': 0,
    quotes: 0,
    semi: [
      'error',
      'always'
    ],
    'trailing-comma': 0,
    '@typescript-eslint/camelcase': [
      'error',
      {
        allow: [ '^_', '__non_webpack_require__' ]
      }
    ]
  }
};
