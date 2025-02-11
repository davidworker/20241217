// 基本運算

console.log("---基本運算---");

const a = 10;
const b = 3;

console.log(`a: ${a}, typeof a: ${typeof a}`);
console.log(`b: ${b}, typeof b: ${typeof b}`);

// 加法
const sum = a + b;

// 減法
const diff = a - b;

// 乘法
const product = a * b;

// 除法
const quotient = a / b;

// 餘數
const remainder = a % b;

// 指數
const power = a ** b;

console.log(`sum: ${sum}, typeof sum: ${typeof sum}`);
console.log(`diff: ${diff}, typeof diff: ${typeof diff}`);
console.log(`product: ${product}, typeof product: ${typeof product}`);
console.log(`quotient: ${quotient}, typeof quotient: ${typeof quotient}`);
console.log(`remainder: ${remainder}, typeof remainder: ${typeof remainder}`);
console.log(`power: ${power}, typeof power: ${typeof power}`);

// 遞增與遞減

console.log("---遞增與遞減---");

console.log("---遞增++---");
let x = 5;
let x_plus = x++; // 先賦值，再遞增
// 1. x_plus = x; -> x_plus = 5
// 2. x = x + 1; -> x = 5 + 1 = 6
console.log(`x: ${x}, x_plus: ${x_plus}`);

console.log("---++遞增---");
let y = 5;
let y_plus = ++y; // 先遞增，再賦值
// 1. y = y + 1; -> y = 5 + 1 = 6
// 2. y_plus = y; -> y_plus = 6
console.log(`y: ${y}, y_plus: ${y_plus}`);

console.log("---遞減---");
let z = 5;
let z_minus = z--; // 先賦值，再遞減
// 1. z_minus = z; -> z_minus = 5
// 2. z = z - 1; -> z = 5 - 1 = 4
console.log(`z: ${z}, z_minus: ${z_minus}`);

console.log("-----遞減---");
let w = 5;
let w_minus = --w; // 先遞減，再賦值
// 1. w = w - 1; -> w = 5 - 1 = 4
// 2. w_minus = w; -> w_minus = 4
console.log(`w: ${w}, w_minus: ${w_minus}`);

// 惡搞
let i = 5;
let m = i++ - i-- - --i + i--;
console.log(`i: ${i}, m: ${m}`);
