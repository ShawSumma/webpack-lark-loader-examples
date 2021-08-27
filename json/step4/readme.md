# Setting up `webpack-lark-loader`

To install the lark the required loaders for webpack, run:

```sh
npm install webpack-lark-loader
npm install babel-loader @babel/core
```

## Telling Webpack to use `webpack-lark-loader` for `.lark` files

Webpack does not know to process `.lark` files by default.

Update `webpack.config.js` to the following

```js
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
```

this will tell lark to treat `.lark` files with `webpack-lark-loader` and `.js` files with `babel-loader`

