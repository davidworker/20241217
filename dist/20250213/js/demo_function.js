// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// let a = 9;
// let b = 9;

// for (let i = 1; i < a; i++) {
//     for (let j = 1; j < b; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

/**
 * 1. 相同的實作邏輯
 * 2. 只有參數不同
 */

/**
 * 執行乘法表
 * @param {*} a 乘法表的行數
 * @param {*} b 乘法表的列數
 */
function run(a, b) {
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}

/**
 * 呼叫函數
 * 不需知道細節，只要知道怎麼使用
 */
// run(2, 9);
// run(4, 5);

/**
 * 資料流
 * IN -> 函數 -> OUT
 * IN 參數
 * OUT 回傳值
 *
 * IN -> 函數 -> OUT(IN) -> 函數 -> OUT(IN) -> 函數 -> OUT
 */

/**
 * 使用函數的好處
 * 1. 可讀性高
 * 2. 可維護性高
 * 3. 可重用性高
 * 4. 可擴展性高
 * 5. 可測試性高
 */

/**
 * 做 pizza 流程
 * 1. 準備麵團
 * 混合高筋麵粉、酵母、鹽和溫水
 * 揉麵至光滑有彈性
 * 讓麵團發酵約1-2小時
 *
 * 2. 準備醬料
 * 可以使用番茄醬為基底
 * 加入蒜末、義大利香料、鹽和胡椒調味
 * 也可以選擇白醬或青醬為基底
 *
 * 3. 準備配料
 * 切片起司（通常是莫札瑞拉）
 * 準備各種喜愛的配料（如蘑菇、火腿、青椒等）
 * 確保配料切成適當大小
 *
 * 4. 組裝與烘烤
 * 將麵團擀成圓形
 * 塗抹醬料
 * 鋪上起司和配料
 * 預熱烤箱至220-250度
 * 烤製約12-15分鐘直到起司融化、邊緣金黃
 *
 * 5. 最後點綴
 * 可以撒上新鮮羅勒葉
 * 淋上橄欖油
 * 依個人喜好加入辣椒片或帕瑪森起司粉
 */

function makePizza(
    size = 10,
    sauce = "番茄醬",
    ingredients = ["蘑菇", "火腿", "青椒"],
    bakeTime = 12,
    garnishs = ["辣椒片", "帕瑪森起司粉"]
) {
    readyDough(size);
    prepareSauce(sauce);
    prepareIngredients(ingredients);
    bakePizza(bakeTime);
    garnish(garnishs);
}

function readyDough(size) {
    console.log(`準備${size}吋的麵團`);
    console.log("混合高筋麵粉、酵母、鹽和溫水");
    console.log("揉麵至光滑有彈性");
    console.log("讓麵團發酵約1-2小時");
}

function prepareSauce(sauce) {
    console.log(`準備${sauce}`);
    console.log("可以使用番茄醬為基底");
    console.log("加入蒜末、義大利香料、鹽和胡椒調味");
    console.log("也可以選擇白醬或青醬為基底");
}

function prepareIngredients(ingredients) {
    console.log(`準備${ingredients.join(", ")}`);
    console.log("切片起司（通常是莫札瑞拉）");
    console.log("準備各種喜愛的配料（如蘑菇、火腿、青椒等）");
    console.log("確保配料切成適當大小");
}

function bakePizza(bakeTime) {
    console.log("組裝與烘烤");
    console.log("將麵團擀成圓形");
    console.log("塗抹醬料");
    console.log("鋪上起司和配料");
    console.log(`烤製約${bakeTime}分鐘直到起司融化、邊緣金黃`);
}

function garnish(garnishs) {
    console.log("最後點綴");
    console.log("可以撒上新鮮羅勒葉");
    console.log("淋上橄欖油");
    console.log(`依個人喜好加入${garnishs.join(", ")}`);
}

/**
 * 使用 const 宣告的函數，不能重新賦值
 * 當不小心重新賦值，會報錯，方便除錯(Debug)
 */

/**
 * return 會終止函數
 * 可以丟出值，也可以不丟出值
 */

/**
 * 兩數相加
 * @param {*} a
 * @param {*} b
 * @returns 兩數相加的結果
 */
const sum = function (a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
    return a + b;
    console.log("不會執行");
};

let result = sum(10, 100);
console.log(result);
