import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: ['dist/**']
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.css'],
    rules: {
      // Disable CSS-specific linting rules since PostCSS/Tailwind handles this
      'no-unknown-at-rule': 'off',
      'at-rule-no-unknown': 'off',
    },
    languageOptions: {
      // CSS files don't need ECMAScript parsing
      parser: null,
    },
  },
])
