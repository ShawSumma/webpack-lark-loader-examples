# Simple JSON Parser

In this example, the file [json.lark](src/json.lark) impored directly from javascript.
 This allows us to parse json into a tree structure. 
Which can then be turned into a javascript object.

## NPM Dependencies

Install the dependencies required to build the json parser

```sh
npm install
```

This will load the dependencies from [package.json](package.json) and install the required packages.

## Run The Parser!

Build a bundle from [src/index.js](src/index.js), as specified by [the webpack config](webpack.config.js)

```sh
npx webpack
```

And run it

```sh
node ./dist/main.js
```
