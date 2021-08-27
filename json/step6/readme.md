# Emulating JSON.parse

Lark has many utilites for visiting trees and their child nodes.

Lark.js can do much of the same!

The function `get_parser()` can take an argument that transforms the tree recursivly.

```js
import {get_parser} from './json.lark';

// these get called on the nodes that have a name matching the keys
// they must match the names exactly
let transformer = {
    /// turn the string that the parser identifed as a number into a number
    number: ([n]) => Number(n.value),

    /// remove the quotes from the string
    string: ([s]) => s.value.slice(1, -1),

    // the array's children are transformed before this is called
    /// this is the same as the function Array.from
    array: (elems) => elems,

    // objects parse as an array of key and value
    /// pairs of keys and values 
    pair: ([key, value]) => [key, value],

    object: (entries) => Object.fromEntries(entries),

    /// the json constants constant
    null: () => null,
    false: () => false,
    true: () => true,
};

// get the parser and use our transformer
const parser = get_parser({
    transformer: transformer
});

// parse some json
const jsonString = '{"json": {"is-cool": true}, "lyrics": {"object": "abc", "is_easy_as": [1, 2, 3]}}';
const stuff = parser.parse(jsonString);
console.dir(stuff);
```

## We Are Done

This is a full `JSON.parse` implementation, you can find more lark grammars 