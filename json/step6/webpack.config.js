module.exports = {
    mode: 'development',
    target: 'node',
    module: {
        rules: [
            { test: /\.lark$/, use: 'webpack-lark-loader' },
            { test: /\.js$/, use: 'babel-loader' },
        ],
    },
};