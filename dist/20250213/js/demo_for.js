// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

/**
 * for (let 初始值; 條件; 遞增) {}
 * i++ => i = i + 1
 */
for (let i = 0; i < 100; i++) {
    console.log("Hello World");
}

/**
 * 每個學生都加 10 分
 * array index 從 0 開始
 */
let students = [60, 59, 58, 57, 56, 55, 54, 53, 52, 51];
let max = students.length;

for (let i = 0; i < max; i++) {
    console.log(`第 ${i + 1} 位同學分數是 ${students[i]}`);
    console.log("---加 10 分---");
    students[i] += 10;
    console.log(`第 ${i + 1} 位同學分數是 ${students[i]}`);
}

console.log(students);
