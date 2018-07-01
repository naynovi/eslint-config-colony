module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'prettier',
    'prettier/flowtype'
  ],
  parser: 'babel-eslint',
  env: {
    es6: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['flowtype', 'prettier'],
  rules: {
    'eqeqeq': [2, 'smart'],
    'max-len': [2, { code: 80, ignoreComments: true }],
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'no-use-before-define': ['error', { functions: false, 'classes': true }],
    'no-warning-comments': ['error', { terms: ['fixme'], location: 'start' }],
    'object-curly-newline': ['error', { consistent: true }],
    'flowtype/require-valid-file-annotation': [1, 'always'],
    'import/no-anonymous-default-export': [2],
    'prettier/prettier': [
      'error',
      {
        'parser': 'flow',
        'singleQuote': true,
        'trailingComma': 'all',
      },
    ],
  },
};
