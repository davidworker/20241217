let score = 59;

/**
 * 解法1 if...else
 */
// let grade;
// if (score >= 60) {
//     grade = "及格";
// } else {
//     grade = "不及格";
// }

/**
 * 解法2 iif
 */
// let grade = (score >= 60) ? "及格" : "不及格";

/**
 * 解法3 hack 邏輯
 */
// let grade = "不及格";
// if (score >= 60) {
//     grade = "及格";
// }

/**
 * 解法4 思維反轉(NOT)
 */
let grade = "及格";
if (score < 60) {
    grade = "不及格";
}

console.log(grade);
