module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    indent: ['off'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    "import/prefer-default-export": 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
  },
  env: {
    // change as necessary
    node: true,
  },
};
