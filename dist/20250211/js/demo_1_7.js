// if ... else
let bao = 5;
let xigua = 0;
let sell_xigua = false;
let have_sell_xigua = sell_xigua ? "有" : "沒有";
let sell_xigua_str = `${have_sell_xigua}看到賣西瓜的`;

// 買五顆包子，如果看到賣西瓜的，買一顆(什麼的一顆)(x)
// 買五顆包子，如果看到賣西瓜的，買一顆西瓜(v)

// if (sell_xigua) {
//     xigua = 1;
// }

// console.log("有看到賣西瓜的", sell_xigua);
// console.log("買了", bao, "顆包子");
// console.log("買了", xigua, "顆西瓜");

// 買五顆包子，如果看到賣西瓜的，買一顆西瓜，如果沒有看到賣西瓜的，多買五顆包子
// console.log(
//     "---買五顆包子，如果看到賣西瓜的，買一顆西瓜，如果沒有看到賣西瓜的，多買五顆包子---"
// );

if (sell_xigua) {
    xigua = 1;
} else {
    bao = bao + 5;
}

console.log(`${sell_xigua_str}，所以買了 ${bao} 顆包子跟 ${xigua} 顆西瓜`);

// if (1 > 2) {} -> if (false) {} 隱式轉換
if (1 > 2) {
    console.log(true);
} else {
    console.log(false);
}
