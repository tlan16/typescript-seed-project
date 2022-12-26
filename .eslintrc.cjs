/**
 * @type {import('eslint').Linter.Config<import('eslint/rules').ESLintRules>}
 */
const eslintConfig = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  plugins: [
    'unused-imports',
  ],
  parser: '@babel/eslint-parser',
  rules: {
    'semi': ['error', 'always'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    'no-unused-vars': 'off',
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/*.spec.ts'],
      env: {
        'jest/globals': true,
      },
      extends: [
        'plugin:jest/recommended',
      ],
      plugins: ['jest'],
    }
  ]
}

module.exports = eslintConfig
