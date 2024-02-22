module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': ['off'],
    
        // 使用单引号
        'quotes': ['error', 'single'],

        // 使用分号结尾
        'semi': ['error', 'always'],

        // 缩进风格
        'indent': ['error', 4],

        // 禁止使用 console
        // 'no-console': 2,

        // 比如import {Route} ，{} 两侧 无空格
        'object-curly-spacing': ['error', 'never'],

        // 注释前要加空格
        'space-infix-ops': 'error',

        // 不允许非空数组里面有多余的空格
        'array-bracket-spacing': [2, 'never'],

        // 不允许在对象中出现多余空格
        'no-multi-spaces': [2, {exceptions: {'ObjectExpression': true}}],
    }
};
