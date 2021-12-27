const RULES = {
  OFF: 'off',
  ERROR: 'error',
  WARN: 'warn',
};

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
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
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
    // globals
    'no-shadow': RULES.OFF,
    'no-console': RULES.WARN,
    'no-undef': 2,
    '@typescript-eslint/no-shadow': [RULES.ERROR],
    // react
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-uses-vars': 2,
    'react/prop-types': RULES.OFF,
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-no-duplicate-props': 2,
    'react/display-name': RULES.OFF,
    'react-hooks/exhaustive-deps': RULES.WARN,
    'react-hooks/rules-of-hooks': RULES.ERROR,
    // prettier
    'prettier/prettier': RULES.ERROR,
    'arrow-body-style': RULES.OFF,
    'prefer-arrow-callback': RULES.OFF,
    'arrow-parens': [RULES.ERROR, 'as-needed'],
    // react native import
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    // eslint-plugin-import
    'import/no-unused-modules': [RULES.ERROR, { unusedExports: true }],
    'import/namespace': RULES.OFF,
    'import/no-unresolved': RULES.OFF,
    'import/no-extraneous-dependencies': RULES.OFF,
    'import/prefer-default-export': RULES.OFF,
    'import/extensions': [RULES.ERROR, 'never'],
    'import/named': RULES.OFF,
    'import/default': RULES.OFF,
    'import/order': [
      RULES.ERROR,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
