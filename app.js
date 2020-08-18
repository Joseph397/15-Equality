// conditional Statements
// comparison Operators
// >, <, >=, <=, ==, ===, !=, !==
// == checks only value
// === checks value and type

const num1 = 6;
const num2 = 6;

const value = num1 == num2;
const value2 = num1 === num2;

console.log(value); // true
console.log(value2); // true

//============================================

const num3 = 6;
const num4 = '6';

const value3 = num3 == num4;
const value4 = num3 === num4;

console.log(value3); // true
console.log(value4); // false            because === checks for value as well as datatype. 6 is not a string

//==================================================

const num5 = 6;
const num6 = 10;

const value5 = num5 != num6;
const value6 = num5 !== num6;

console.log(value5); // true
console.log(value6); // true

//===================================================

const num7 = 6;
const num8 = '6';

const value7 = num7 != num8;
const value8 = num7 !== num8;

console.log(value7); // false
console.log(value8); // true
