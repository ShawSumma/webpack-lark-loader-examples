module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        filename: './src/index.js',
    },
    output: {
        filename: './index.js',
    },
    resolve: {
        fallback: {
            "util": require.resolve("util"), 
        },
    },
    module: {
        rules: [
            { test: /\.lark$/, use: 'webpack-lark-loader' },
            { test: /\.js$/, use: 'babel-loader' },
        ],
    },
};