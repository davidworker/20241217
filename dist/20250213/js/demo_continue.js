for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

console.log("迴圈結束了!!!");

let num = 0;
// while (num < 10) {
//     if (num == 5) {
//         continue;
//     }
//     console.log(num);
//     num++;
// }

let students = [59, 74, 92, 37, 51, 99, 91, 90, 89, 77];
let max = students.length;

for (let i = 0; i < max; i++) {
    if (students[i] > 90) {
        students[i] = 100;
        continue;
    }
    students[i] = students[i] + 10;
}

console.log(students);
