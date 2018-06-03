// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential', 'airbnb-base'],
    // required to lint *.vue files
    plugins: [
        'vue',
        // 'eslint-plugin-script-tags'
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'state', // for vuex state
                'acc', // for reduce accumulators
                'e' // for e.returnvalue
            ]
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // indentation
        "indent": [ 1, 4 ],
        "vue/script-indent": [
            "error",
            4,
            {
                "baseIndent": 1,
                "switchCase": 1,
                "ignores": []
            },
        ],

        // spacing
        "template-curly-spacing": [ 2, "always" ],
        "array-bracket-spacing": [ 2, "always" ],
        "object-curly-spacing": [ 2, "always" ],
        "computed-property-spacing": [ 2, "always" ],
        "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],

        // strings
        "quotes": [ 1, "single", "avoid-escape" ],

        // code arrangement matter
        "no-use-before-define": [ 2, { "functions": false } ],

        // make it meaningful
        "prefer-const": 1,

        // keep it simple
        "complexity": [ 1, 5 ],
    }
}
