# Setup Webpack

Webpack is a tool to generate a single javascript file from many sources.

## Install webpack

Install webpack and its command line tool:

```sh
npm install webpack webpack-cli
```

this will add webpack and webpack-cli into package.json as dependencies.

## Setup webpack.config.json

Webpack configuration is controlled by the file `webpack.config.js`.

```js
// copy this into webpack.config.js
module.exports = {
    mode: 'development',
};
```
