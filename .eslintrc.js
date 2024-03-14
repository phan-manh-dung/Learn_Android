module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react-native/no-inline-styles': 'off',
    'react/no-unstable-nested-components': 'off',
  },
  globals: {
    windowWidth: true,
    windowHeight: true,
  },
  endOfLine: 'auto',
};
