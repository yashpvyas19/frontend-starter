module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    './lint/.eslintrc-typescript.cjs',
    './lint/.eslintrc-import.cjs',
    './lint/.eslintrc-react.cjs',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
  ],
  ignorePatterns: ['vite.config.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-void': 'off',
    'consistent-return': 'off',
    'no-array-constructor': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
      },
    ],
    'no-restricted-syntax': [
      'error',
      'ForStatement',
      'ForInStatement',
      'ForOfStatement',
      'ContinueStatement',
      'DoWhileStatement',
      'WhileStatement',
      'WithStatement',
      // REACT
      {
        selector: 'MemberExpression[object.name="React"]',
        message: 'Use of React.method is not allowed.',
      },
      // TYPESCRIPT
      {
        selector: 'TSTypeReference[typeName.left.name="React"]',
        message: 'Use of React.type is not allowed.',
      },
    ],
  },
};
