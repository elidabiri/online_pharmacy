module.exports = {
  extends: ['react-app', 'react-app/jest', 'prettier'],
  overrides: [
    {
      files: ['server/**/*.ts'],
      env: { node: true, es2021: true },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      rules: { 'no-console': 'off' },
    },
  ],
};