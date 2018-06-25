module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  globals: {
    graphql: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  settings: {
    'import/core-modules': ['react', 'prop-types', 'react-helmet'],
  },
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    complexity: [2, 6],
    'max-statements': [2, 9],
    'max-statements-per-line': [2, { max: 1 }],
    'max-nested-callbacks': [2, 3],
    'max-depth': [2, { max: 3 }],

    // diabled rules
    'prefer-destructuring': [0],
    'no-restricted-globals': ['error', 'location'],
    'no-use-before-define': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/no-danger': [0],
  },
};
