// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import i18nextPlugin from 'eslint-plugin-i18next';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    i18nextPlugin.configs['flat/recommended'],
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: new URL('.', import.meta.url).pathname,
            },
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                '__IS_DEV__': true
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,

            // Кастомные правила
            // 'no-console': ['warn', { allow: ['warn', 'error'] }],
            'react/react-in-jsx-scope': 'off', 
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'react/jsx-props-no-spreading': 'warn',
            'indent': [2, 4], 
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': 'off', 
            'object-curly-spacing': ['error', 'always'],
            'i18next/no-literal-string': [
                'error', 
                {
                    markupOnly: true,
                    ignoreAttribute: ['data-testid', 'to'],
                }
            ],
            'max-len': ['error', {'ignoreComments': true, code: 100}]
        },
    },
    {
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
        }
    },
    ...storybook.configs["flat/recommended"]
];

// npx eslint "**/*.{ts,tsx}"

// npx eslint src/app/App.tsx --debug
// запуск линтера ESLint для конкретного файла src/app/App.tsx с включённым режимом отладки (--debug).