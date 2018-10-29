import * as math from './math'; 

// import {add, subtract, multiply, divide} from './math';
console.log ('Math', math)
import {atd} from './helper';

atd('h1', `23 + 67 = ${math.add(23, 67)}`);
atd('h1', `56 - 14 = ${math.subtract(56, 14)}`);
atd('h1', `2 * 3 = ${math.multiply(2, 3)}`);
atd('h1', `6 / 3 = ${math.divide(6, 3)}`);