module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments',
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
  },
  overrides: [
    {
      files: ['./src/contexts/**'],
      rules: {
        'react-refresh/only-export-components': ['off'],
      },
    },
  ],
};
