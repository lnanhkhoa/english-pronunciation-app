module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'eqeqeq': [2, 'smart'],
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-no-bind': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'consistent-return': 'off',
    "max-len": [2, 300, 4]
  },
  "globals": {
    "arguments": true,
    "strapi": true,
    "__DEV__": true
  }
};
