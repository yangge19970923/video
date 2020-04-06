module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'spaced-comment': 0,
        'semi': 0,
        'padded-blocks': 0,
        'indent': 0,
        'eol-last': 0,
        'vue/no-use-v-if-with-v-for': 0
    }
}
