// 變數宣告

// let 隱含 dead zone，可控性高
// console.log(cup);

// 隱含 var box 放在第一行，可控性較低
console.log(box);

// 使用 let 宣告一個變數
let cup = null; // 宣告一個杯子，裡面什麼都沒有
console.log(`杯子裡面有 ${cup}`); // 印出杯子裡的東西

cup = "水"; // 把水倒進杯子裡

console.log(`杯子裡面有 ${cup}`); // 印出杯子裡的東西

cup = null; // 把杯子裡的東西倒掉

console.log(`杯子裡面有 ${cup}`); // 印出杯子裡的東西

cup = "茶"; // 把茶倒進杯子裡

console.log(`杯子裡面有 ${cup}`); // 印出杯子裡的東西

var box = null; // 宣告一個盒子，裡面什麼都沒有

console.log(`盒子裡面有 ${box}`); // 印出盒子裡的東西

box = "書"; // 把書放進盒子裡

console.log(`盒子裡面有 ${box}`); // 印出盒子裡的東西

let pi = 3.14;

console.log(`pi 是 ${pi}`); // 印出 pi 的值

pi = 9999;

console.log(`pi 是 ${pi}`); // 印出 pi 的值

const pi2 = 3.14;

console.log(`pi2 是 ${pi2}`); // 印出 pi2 的值

pi2 = 9999;

// 發生錯誤，因為 const 宣告的變數不能被修改
console.log(`pi2 是 ${pi2}`); // 印出 pi2 的值
