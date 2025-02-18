/**
 *  資料流模型
 *  IN(parameter) -> 函數 -> OUT(return)
 *  OUT: 回傳值
 * 不回傳值使用 void 表示
 */

/**
 * 小駝峰式命名(常用)
 * @param {*} a
 * @param {*} b
 */
function calculateNum(a, b) {
    /**
     * 編譯器預處理
     */
    // let a = 1;
    // let b = 2;

    let c = a + b;

    return c;
}

/**
 * 呼叫函數
 * 不需知道細節，只要知道怎麼使用
 * 編譯器會預處理對應的參數宣告
 * 1. 呼叫 calculateNum 函數
 * 2. 將 10 和 99 傳入函數
 * 3. 函數會將 10 和 99 相加，並回傳相加的結果
 * 4. 將相加的結果賦值給 total
 * 5. 印出 total
 */
let total = calculateNum(10, 99);
// let total = 10 + 99 = 109
console.log(total);

/**
 * 連字號命名(常用)
 * @param {*} a
 * @param {*} b
 */
function calculate_num(a, b) {}

/**
 * 大駝峰式命名
 * @param {*} a
 * @param {*} b
 */
function CalculateNum(a, b) {}
