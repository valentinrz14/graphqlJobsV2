module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'google',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'prettier',
    'react-hooks',
    'import',
    'jsx-a11y',
  ],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // eslint-plugin-import
    'import/no-unused-modules': ['error', { unusedExports: true }],
    // prettier
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-uses-vars': 2,
    'no-undef': 2,
    'react/prop-types': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/namespace': 'off',
    'import/named': 'off',
    // react native import
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
  },
};
