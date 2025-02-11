// 隱式轉換

const num = 42;
const str = "價格:";

const combine = str + num;

console.log(combine, typeof combine);

// 顯式轉換

const strnum = "123";
const num2 = Number(strnum);
const name = "DAVID";
const namenum = Number(name);

console.log(strnum, typeof strnum);
console.log(num2, typeof num2);
console.log(name, typeof name);
console.log(namenum, typeof namenum); // NaN = Not a Number

// 文字數字轉換技巧

const strnum2 = "123";
const num3 = +strnum2;
const num4 = 123 + strnum2;
const num5 = 123;
const strnum5 = "" + num5;

console.log(strnum2, typeof strnum2);
console.log(num3, typeof num3);
console.log(num4, typeof num4); // 只要跟字串相加，就會變成字串
console.log(strnum5, typeof strnum5);

// 轉換陷阱
console.log("---轉換陷阱---");
const case1 = 1 + "2"; // 數字和字串相加，會變成字串
const case2 = "3" - 1; // 字串減數字，會變成數字
const case3 = 1 == "1"; // 寬鬆相等
const case4 = [] + {}; // 陣列和物件相加，會變成字串
const case5 = [] + []; // 陣列和陣列相加，會變成字串
const case6 = "5" * "4"; // 字串和字串相乘，會變成數字

console.log(case1, typeof case1);
console.log(case2, typeof case2);
console.log(case3, typeof case3);
console.log(case4, typeof case4);
console.log(case5, typeof case5);
console.log(case6, typeof case6);
