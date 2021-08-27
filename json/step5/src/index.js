import {get_parser} from './json.lark';
const parser = get_parser();
console.log(parser.parse('{}'));