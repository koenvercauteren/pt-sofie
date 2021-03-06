module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  globals: {
    graphql: true,
    localStorage: true,
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
    'max-statements-per-line': [2, { max: 1 }],
    'max-nested-callbacks': [2, 3],
    'max-depth': [2, { max: 3 }],

    // diabled rules
    'react/forbid-prop-types': [0],
    'prefer-destructuring': [0],
    'no-restricted-globals': ['error', 'location'],
    'no-use-before-define': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/no-danger': [0],
    'react/destructuring-assignment': [0],
  },
};
