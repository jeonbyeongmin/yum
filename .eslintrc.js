module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        arrowParens: 'avoid',
        proseWrap: 'preserve',
        endOfLine: 'auto',
      },
    ],
    'no-unused-vars': ['error', {args: 'none'}],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
