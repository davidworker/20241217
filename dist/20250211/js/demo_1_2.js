// 數字型態(Number)

// 常用型態為 integer 和 float

let integer = 123; // 整數
let float = 123.456; // 浮點數
let scientific = 1.23e-3; // 科學記號
let binary = 0b1010; // 二進位
let octal = 0o123; // 八進位
let hexadecimal = 0x123; // 十六進位

console.log(`integer 是 ${integer} (型態: ${typeof integer})`); // 印出整數
console.log(`float 是 ${float} (型態: ${typeof float})`); // 印出浮點數
console.log(`scientific 是 ${scientific} (原始值: 1.23e-3)`); // 印出科學記號
console.log(`binary 是 ${binary} (原始值: 0b1010)`); // 印出二進位
console.log(`octal 是 ${octal} (原始值: 0o123)`); // 印出八進位
console.log(`hexadecimal 是 ${hexadecimal} (原始值: 0x123)`); // 印出十六進位

// 展示數字運算
console.log("\n數字運算示例：");
console.log(`二進位+十六進位: ${binary + hexadecimal}`); // 10 + 291 = 301
console.log(`科學記號*整數: ${scientific * integer}`); // 0.00123 * 123 = 0.15129

// 字串型態(String)

// "" 雙引號 代表字串
// '' 單引號 代表字元，在JavaScript中，一樣代表字串
// `` 反引號 代表變數字串合併使用

let string = "Hello, World!"; // 字串
let string2 = "Hello, World!"; // 字串
let string3 = `Hello, World!`; // 字串

console.log(`string 是 ${string} (型態: ${typeof string})`); // 印出字串
console.log(`string2 是 ${string2} (型態: ${typeof string2})`); // 印出字串
console.log(`string3 是 ${string3} (型態: ${typeof string3})`); // 印出字串

string = 123;
console.log(`string 是 ${string} (型態: ${typeof string})`); // 印出字串

// 布林值(Boolean)

// 布林值只有兩個值，true 和 false

let boolean = true; // 布林值
let boolean2 = false; // 布林值
let b1 = 1;
let b2 = 0;
let b3 = "0";
let b4 = -1;

console.log(`boolean 是 ${boolean} (型態: ${typeof boolean})`); // 印出布林值
console.log(`boolean2 是 ${boolean2} (型態: ${typeof boolean2})`); // 印出布林值
console.log(`b1 是 ${Boolean(b1)}`); // 印出布林值
console.log(`b2 是 ${Boolean(b2)}`); // 印出布林值
console.log(`b3 是 ${Boolean(b3)}`); // 印出布林值
console.log(`b4 是 ${Boolean(b4)}`); // 印出布林值

console.log(`b1 是 ${b1} (型態: ${typeof b1})`); // 印出布林值
if (b1) {
    console.log("b1 是 true");
} else {
    console.log("b1 是 false");
}

console.log(`b2 是 ${b2} (型態: ${typeof b2})`); // 印出布林值
if (b2) {
    console.log("b2 是 true");
} else {
    console.log("b2 是 false");
}

console.log(`b3 是 ${b3} (型態: ${typeof b3})`); // 印出布林值
if (b3) {
    console.log("b3 是 true");
} else {
    console.log("b3 是 false");
}

console.log(`b4 是 ${b4} (型態: ${typeof b4})`); // 印出布林值
if (b4) {
    console.log("b4 是 true");
} else {
    console.log("b4 是 false");
}

// null 和 undefined
let null1;
let null2 = null;

console.log(`null1 是 ${null1} (型態: ${typeof null1})`); // 印出null
console.log(`null2 是 ${null2} (型態: ${typeof null2})`); // 印出null
console.log(`null1 是 ${Boolean(null1)}`); // 印出布林值
console.log(`null2 是 ${Boolean(null2)}`); // 印出布林值

let undefined1;
let undefined2 = undefined;

console.log(`undefined1 是 ${undefined1} (型態: ${typeof undefined1})`); // 印出undefined
console.log(`undefined2 是 ${undefined2} (型態: ${typeof undefined2})`); // 印出undefined

// 變數指定給變數
let s1 = 1;
let s2 = s1; // s2 = 1

console.log(`s1 是 ${s1} (型態: ${typeof s1})`); // 印出數字
console.log(`s2 是 ${s2} (型態: ${typeof s2})`); // 印出數字

s1 = 2;

console.log(`s1 是 ${s1} (型態: ${typeof s1})`); // 印出數字
console.log(`s2 是 ${s2} (型態: ${typeof s2})`); // 印出數字
