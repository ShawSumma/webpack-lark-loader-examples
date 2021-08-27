# Making a Lark Grammar

lark.js and in turn webpack-lark-loader will accept any lark grammar that uses lalr.

The json grammar from [json.lark](https://github.com/lark-parser/lark/blob/master/examples/standalone/json.lark) will do.

put this in `src/json.lark`

```lark
?start: value

?value: object
        | array
        | string
        | SIGNED_NUMBER      -> number
        | "true"             -> true
        | "false"            -> false
        | "null"             -> null

array  : "[" [value ("," value)*] "]"
object : "{" [pair ("," pair)*] "}"
pair   : string ":" value

string : ESCAPED_STRING

%import common.ESCAPED_STRING
%import common.SIGNED_NUMBER
%import common.WS

%ignore WS
```

## Using said lark grammar

with webpack-lark-loader, using a lark grammar is as simple as

```js
// it is always called get_parser
import {get_parser} from './json.lark';

// load the parser
const parser = get_parser();

// parse json into a Tree object
// this gives back more data than JSON.parse would
console.log(parser.parse('{}'));
```

## Run the parser

To run the output file:

```sh
node dist/main.js
```