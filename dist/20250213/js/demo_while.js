/**
 * while (boolean) {}
 * 先判斷 boolean 是否成立
 * 成立則執行 {} 內程式碼
 * 執行完 {} 內程式碼後，再判斷 boolean 是否成立
 * 成立則再執行 {} 內程式碼
 * 一直重複直到 boolean 不成立為止
 * !注意無窮迴圈產生
 * 無窮迴圈產生條件
 * 1. 迴圈變數沒有改變
 * 2. 迴圈條件永遠成立 while (true) {}
 */

let num = 10;
while (num > 0) {
    console.log(num);
    num--;
}

let i = 10;

console.log("while永遠不成立");
while (i < 10) {
    console.log(i);
    i++;
}

/**
 * do while 至少會執行一次
 */
console.log("do while 至少會執行一次");
do {
    console.log(i);
    i++;
} while (i < 10);

console.log(i);
