import fs from 'fs';
import path from 'path';

import { get_parser } from './grammar.lark';
import * as transformer from './transforms.js';
import run from './run.js';

const parser = get_parser({ transformer });

// replace this with the file you want to run, or process.argv[1]
// like this:
// const fileToParse = process.argv[1];
const fileToParse = path.resolve(__dirname, '../input/file-to-parse');

fs.readFile(fileToParse, (err, data) => {
    if (err != null) {
        throw err;
    }
    const ast = parser.parse(data);
    run(ast);
});
