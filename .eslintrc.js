const path = require('path')

module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'prettier/standard',
        'prettier/react'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: path.resolve(__dirname, '../../../'),
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error'
    },
    settings: {
        'import/resolver': {
            typescript: {}
        },
        react: {
            version: 'detect'
        }
    }
}
