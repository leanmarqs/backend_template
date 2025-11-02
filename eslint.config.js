// eslint.config.js
import eslintPluginTs from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginImport from 'eslint-plugin-import'
import prettier from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.ts'],
    ignores: [
      'node_modules',
      'dist',
      'prisma.config.ts', // 👈 agora o ESLint vai ignorar este arquivo
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      import: pluginImport,
    },

    rules: {
      // 🚫 proibir ponto e vírgula
      semi: ['error', 'never'],

      // ✅ usar aspas simples
      quotes: ['error', 'single'],

      // ⚙️ TypeScript
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // 🧩 Importações ESM + TS
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'always',
          js: 'always',
        },
      ],
      'import/no-unresolved': 'off',
    },
  },

  prettier,
]
