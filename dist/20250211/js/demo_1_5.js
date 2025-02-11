// 相等比較
// 最終回傳值為布林值 (true / false)

console.log("---相等比較---");

const num = 5;
const str = "5";

console.log(`num: ${num}, typeof num: ${typeof num}`);
console.log(`str: ${str}, typeof str: ${typeof str}`);

console.log("寬鬆相等 (==)", num == str);
console.log("嚴格相等 (===)", num === str);

// 寬鬆相等 (==) 只會檢查值
// 嚴格相等 (===) 會檢查型別和值(可確保程式品質)

// 不相等比較

console.log("---不相等比較---");

const num2 = 5;
const str2 = "5";

console.log("寬鬆不相等 (!=)", num2 != str2);
console.log("嚴格不相等 (!==)", num2 !== str2);

// 嚴格不相等 (!==) 會檢查型別和值
// 寬鬆不相等 (!=) 只會檢查值

// 大小比較

console.log("---大小比較---");

const num3 = 10;
const num4 = 5;
const num5 = 10;

console.log(`num3: ${num3}, num4: ${num4}`);

console.log(`num3(${num3}) 大於 (>) num4(${num4})`, num3 > num4);
console.log(`num3(${num3}) 小於 (<) num4(${num4})`, num3 < num4);
console.log(`num3(${num3}) 大於等於 (>=) num4(${num4})`, num3 >= num4);
console.log(`num3(${num3}) 小於等於 (<=) num4(${num4})`, num3 <= num4);
console.log(`num3(${num3}) 大於等於 (>=) num5(${num5})`, num3 >= num5);
console.log(`num3(${num3}) 小於等於 (<=) num5(${num5})`, num3 <= num5);

// 特殊比較

console.log("---特殊比較---");
console.log("[] == false", [] == false);
console.log('"" == false', "" == false);
console.log('[1,2] == "1,2"', [1, 2] == "1,2");
console.log("null == undefined", null == undefined);
console.log("0 == false", 0 == false);
