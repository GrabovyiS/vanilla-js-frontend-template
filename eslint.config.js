import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';

const jestConfig = {
  files: ['**/*.test.js'],
  ...jest.configs['flat/recommended'],
};

let jestRules = {
  ...jestConfig.rules,
  'no-unused-vars': 'off',
};

jestConfig.rules = jestRules;

export default [
  js.configs.recommended,

  {
    ignores: ['**/dist/*'],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      'no-unused-vars': 'warn',
    },

    plugins: {
      jest: jest,
    },
  },

  // Configs cascade, things at the bottom override
  jestConfig,
  eslintConfigPrettier,
];
